import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PhotoLibraryRoutingModule} from './photo-library-routing.module';
import {PhotosComponent} from './pages/photos/photos.component';
import {FavoritesComponent} from './pages/favorites/favorites.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {PhotoComponent} from './components/photo/photo.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {NgOptimizedImage} from '@angular/common';
import {SinglePhotoComponent} from './pages/single-photo/single-photo.component';
import {InfiniteScrollerDirective} from "../../directives/infinite-scroller.directive";

@NgModule({
  declarations: [
    PhotosComponent,
    FavoritesComponent,
    PhotoComponent,
    SinglePhotoComponent,
    InfiniteScrollerDirective
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    PhotoLibraryRoutingModule,
  ]
})
export class PhotoLibraryModule {
}
