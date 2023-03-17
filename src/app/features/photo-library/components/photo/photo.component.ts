import {Component, Input, OnInit} from '@angular/core';
import {PhotoModel} from "../../data-models/photo.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PhotoLibraryService} from "../../services/photo-library.service";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit{
  @Input() photo!: PhotoModel;
  @Input() isVisibleBtnAddToFavorites: boolean = false;
  @Input() isVisibleBtnRemoveFromFavorites: boolean = false;

  constructor(
    private snackBar: MatSnackBar,
    private photoLibraryService: PhotoLibraryService

  ) {
  }

  onAddToFavorites(photo: PhotoModel) {
    this.photoLibraryService.addPhotoToFavoritesAtLocalStorage(photo);
    this.snackBar.open('Added to Favorites', 'Close', {
      duration: 2000
    });
  }

  ngOnInit(): void {
    console.log(this.photo);
  }

  onRemoveFromFavorites(photo: PhotoModel) {
    this.photoLibraryService.removePhotoFromFavoritesAtLocalStorage(photo);
  }
}
