import {Component, OnInit, Inject, HostListener} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-photo-modal',
  templateUrl: './photo-modal.component.html',
  styleUrls: ['./photo-modal.component.scss']
})
export class PhotoModalComponent implements OnInit {
  imageSrc = '';
  galleryType = '';
  promoPhotosArray = [
    '../assets/PromoMain.jpg',
    '../assets/Promo1.jpg',
    '../assets/Promo2.jpg',
    '../assets/Promo3.jpg',
    '../assets/Promo4.jpg'
  ];
  livePhotosArray = [
    '../assets/LiveMain.jpg',
    '../assets/Live1.jpg',
    '../assets/Live2.jpg',
    '../assets/Live4.jpg',
    '../assets/Live3.jpg'
  ];

  // tslint:disable-next-line:typedef
  @HostListener('document:keydown', ['$event']) onKeydownHandler(evt: KeyboardEvent) {
    if (this.galleryType !== 'albumArt') {
      if (evt.keyCode === 37) {
        this.onLeftArrowClick();
      } else if (evt.keyCode === 39) {
        this.onRightArrowClick();
      }
    }
  }


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<PhotoModalComponent>) {
    this.imageSrc = this.data.imgSrc;
    this.galleryType = this.data.galleryType;
  }

  ngOnInit(): void {
    // this.imageSrc = this.data.imageSrc;
  }

  onRightArrowClick(): void {
    if (this.galleryType === 'promo') {
      const currentIndex = this.promoPhotosArray.indexOf(this.imageSrc);
      this.imageSrc = this.promoPhotosArray[currentIndex + 1 >= this.promoPhotosArray.length ? 0 : currentIndex + 1];
    } else {
      const currentIndex = this.livePhotosArray.indexOf(this.imageSrc);
      this.imageSrc = this.livePhotosArray[currentIndex + 1 >= this.livePhotosArray.length ? 0 : currentIndex + 1];
    }
  }

  onLeftArrowClick(): void {
    if (this.galleryType === 'promo') {
      const currentIndex = this.promoPhotosArray.indexOf(this.imageSrc);
      this.imageSrc = this.promoPhotosArray[currentIndex === 0 ? this.promoPhotosArray.length - 1 : currentIndex - 1];
    } else {
      const currentIndex = this.livePhotosArray.indexOf(this.imageSrc);
      this.imageSrc = this.livePhotosArray[currentIndex === 0 ? this.livePhotosArray.length - 1 : currentIndex - 1];
    }
  }

  closeModal(): void {
    this.dialogRef.close();
  }

}
