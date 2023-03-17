import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PhotoModel} from "../../data-models/photo.model";
import {PhotoLibraryService} from "../../services/photo-library.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.component.html',
  styleUrls: ['./single-photo.component.scss']
})
export class SinglePhotoComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private photoLibraryService: PhotoLibraryService,
    private snackBar: MatSnackBar
  ) {
  }

  get photo(): PhotoModel {
    return this.activatedRoute.snapshot.data['photo'];
  }

  onRemoveFromFavorites(): void {
    this.photoLibraryService.removePhotoFromFavoritesAtLocalStorage(this.photo);
    this.snackBar.open('Removed from Favorites', 'Close', {
      duration: 2000
    });
  }
}
