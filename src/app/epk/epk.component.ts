import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {MatSidenav} from '@angular/material/sidenav';
import {MatDialog} from '@angular/material/dialog';
import {PhotoModalComponent} from '../../components/photo-modal/photo-modal.component';
import {GlobalService} from '../global.service';

@Component({
  selector: 'app-epk',
  templateUrl: './epk.component.html',
  styleUrls: ['./epk.component.scss']
})
export class EpkComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  selectedVideo = 'cg2LFCcjsX8';
  selectedSection = '';
  musicPlayerWidth = 915;
  videoPlayerWidth = 1165;
  videoPlayerHeight = 400;
  isMobile = false;
  isSideNavOpened = false;
  showHeader = false;
  promoPhotosArray = [
    {path: '../assets/PromoMain.jpg'},
    {path: '../assets/Promo1.jpg'},
    {path: '../assets/Promo2.jpg'},
    {path: '../assets/Promo3.jpg'},
    {path: '../assets/Promo4.jpg'}
  ];
  livePhotosArray = [
    {path: '../assets/LiveMain.jpg'},
    {path: '../assets/Live1.jpg'},
    {path: '../assets/Live2.jpg'},
    {path: '../assets/Live4.jpg'},
    {path: '../assets/Live3.jpg'}
  ];
  @HostListener('window:scroll', ['$event']) // for window scroll events
  // tslint:disable-next-line:typedef
  onScroll(event) {
    const scrollTop = event.target.scrollingElement.scrollTop;
    const numb = window.scrollY;
    if (numb >= 500){
      this.showHeader = true;
      const headerEl: HTMLElement = document.querySelector('.header-container');
      if (headerEl) {
        headerEl.classList.add('active');
      }
    }
    else {
      this.showHeader = false;
      const headerEl: HTMLElement = document.querySelector('.header-container');
      if (headerEl) {
        headerEl.classList.remove('active');
      }
    }
    if (this.isMobile) {
      if (scrollTop >= 0 && scrollTop < 2040) {
        this.selectedSection = '';
      } else if (scrollTop > 2040 && scrollTop < 2640) {
        this.selectedSection = 'music';
      } else if (scrollTop > 2640 && scrollTop < 3150) {
        this.selectedSection = 'photos';
      } else if (scrollTop > 3150 && scrollTop < 3630) {
        this.selectedSection = 'live';
      } else if (scrollTop > 3630 && scrollTop < 4200) {
        this.selectedSection = 'videos';
      } else if (scrollTop > 4200 && scrollTop < 7390) {
        this.selectedSection = 'bio';
      } else if (scrollTop > 7390 && scrollTop < 7550) {
        this.selectedSection = 'partners';
      }
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        this.selectedSection = 'contact';
      }
    } else {
      if (scrollTop >= 0 && scrollTop < 1220) {
        this.selectedSection = '';
      } else if (scrollTop > 1220 && scrollTop < 1820) {
        this.selectedSection = 'music';
      } else if (scrollTop > 1820 && scrollTop < 2470) {
        this.selectedSection = 'photos';
      } else if (scrollTop > 2470 && scrollTop < 3060) {
        this.selectedSection = 'live';
      } else if (scrollTop > 3060 && scrollTop < 3600) {
        this.selectedSection = 'videos';
      } else if (scrollTop > 3600 && scrollTop < 4700) {
        this.selectedSection = 'bio';
      } else if (scrollTop > 4700 && scrollTop < 4850) {
        this.selectedSection = 'partners';
      }
    }
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      this.selectedSection = 'contact';
    }
  }

  constructor(private dialog: MatDialog, private router: Router, private globalService: GlobalService) {

  }

  ngOnInit(): void {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
    } else {

      if (window.outerWidth < 720) {
        this.isMobile = true;
        this.musicPlayerWidth = window.outerWidth - 60;
        this.videoPlayerWidth = window.outerWidth - 60;
        this.videoPlayerHeight = 300;
      } else {
        this.isMobile = false;
        this.musicPlayerWidth = 1165;
        this.videoPlayerWidth = 935;
        this.videoPlayerHeight = 400;
      }
      // if (window.outerWidth > 720 || window.outerWidth < 1300) {
      //   this.musicPlayerWidth = 1000;
      // }
    }
  }

  ngAfterViewInit(): void {
    document.querySelector('video').onclick = (ev) => {
      window.open('https://youtu.be/cg2LFCcjsX8');
    };
  }

  toggleSideNav(): void {
    this.isSideNavOpened = !this.isSideNavOpened;
  }

  onVideoClick(): void {
    console.log('hey');
  }

  onHeaderSectionClick(className, selectedSection): void {
    // document.querySelector(className).scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    const element = document.querySelector(className);
    const offset = !this.isMobile ? 58 : 10;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: !this.isMobile ? offsetPosition : offsetPosition - 43,
      behavior: 'smooth'
    });
    this.selectedSection = selectedSection;
    this.sidenav.close();
  }

  onVideoSelect(videoId): void {
    this.selectedVideo = videoId;
  }

  onPhotoClick(imgSrc, galleryType): void {
    if (window.outerWidth > 720) {
      this.dialog.open(PhotoModalComponent, {
        data: {
          imgSrc,
          galleryType
        },
        backdropClass: 'dialog-bd'
      });
    }
  }

}
