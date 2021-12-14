import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';




import { YouTubePlayerModule } from '@angular/youtube-player';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { PhotoModalComponent } from '../components/photo-modal/photo-modal.component';
import { SwiperModule } from 'swiper/angular';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {IvyCarouselModule} from 'angular-responsive-carousel';


import { LoginComponent } from './login/login.component';
import { EpkComponent } from './epk/epk.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoModalComponent,
    LoginComponent,
    EpkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    YouTubePlayerModule,
    BrowserAnimationsModule,
    MatDialogModule,
    SwiperModule,
    MatSidenavModule,
    MatIconModule,
    IvyCarouselModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
