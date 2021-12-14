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
    '../assets/Promo1.jpeg',
    '../assets/Promo2.jpeg',
    '../assets/Promo3.jpg',
    '../assets/Promo4.jpg'
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
    const currentIndex = this.promoPhotosArray.indexOf(this.imageSrc);
    this.imageSrc = this.promoPhotosArray[currentIndex + 1 >= this.promoPhotosArray.length ? 0 : currentIndex + 1];
  }

  onLeftArrowClick(): void {
    const currentIndex = this.promoPhotosArray.indexOf(this.imageSrc);
    this.imageSrc = this.promoPhotosArray[currentIndex === 0 ? this.promoPhotosArray.length - 1 : currentIndex - 1];
  }

  closeModal(): void {
    this.dialogRef.close();
  }

}
