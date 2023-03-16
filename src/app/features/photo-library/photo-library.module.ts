import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoLibraryRoutingModule } from './photo-library-routing.module';
import { PhotosComponent } from './pages/photos/photos.component';


@NgModule({
  declarations: [
    PhotosComponent
  ],
  imports: [
    CommonModule,
    PhotoLibraryRoutingModule
  ]
})
export class PhotoLibraryModule { }
