import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoLibraryRoutingModule } from './photo-library-routing.module';
import { PhotosComponent } from './pages/photos/photos.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';


@NgModule({
  declarations: [
    PhotosComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    PhotoLibraryRoutingModule
  ]
})
export class PhotoLibraryModule { }
