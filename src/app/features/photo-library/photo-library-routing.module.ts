import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhotosComponent} from "./pages/photos/photos.component";
import {FavoritesComponent} from "./pages/favorites/favorites.component";

const routes: Routes = [
  {
    path: '',
    component: PhotosComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoLibraryRoutingModule { }
