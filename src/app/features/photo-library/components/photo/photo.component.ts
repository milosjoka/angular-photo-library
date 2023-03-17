import {Component, Input, OnInit} from '@angular/core';
import {PhotoModel} from "../../data-models/photo.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PhotoLibraryService} from "../../services/photo-library.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit{
  @Input() photo!: PhotoModel;
  @Input() isVisibleBtnAddToFavorites: boolean = false;
  @Input() isVisibleBtnRemoveFromFavorites: boolean = false;
  @Input() isRedirectToDetailsPageEnabled: boolean = false;

  constructor(
    private snackBar: MatSnackBar,
    private photoLibraryService: PhotoLibraryService,
    private router: Router

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

  showPhotoDetails() {
    if (this.isRedirectToDetailsPageEnabled) {
      this.router.navigate(['/photos', this.photo.id]);
    }
  }
}
