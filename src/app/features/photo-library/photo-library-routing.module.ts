import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhotosComponent} from "./pages/photos/photos.component";
import {FavoritesComponent} from "./pages/favorites/favorites.component";
import {SinglePhotoComponent} from "./pages/single-photo/single-photo.component";
import {PhotoResolver} from "./resolvers/photo.resolver";

const routes: Routes = [
  {
    path: '',
    component: PhotosComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'photos/:id',
    component: SinglePhotoComponent,
    resolve: {photo: PhotoResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoLibraryRoutingModule {
}
