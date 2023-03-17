import {Component, OnInit} from '@angular/core';
import {PhotoModel} from "../../data-models/photo.model";
import {PhotoLibraryService} from "../../services/photo-library.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit{
  public photoList: PhotoModel[] = [];

  constructor(
    private photoLibraryService: PhotoLibraryService,
    private snackBar: MatSnackBar,) {
  }

  ngOnInit(): void {
    this.initPhotoFavoritesList();
    this.listenRemoveFromFavoritesEvent();
  }

  private initPhotoFavoritesList():void {

    this.photoList = this.photoLibraryService.getPhotoFavoritesList();

  }

  private listenRemoveFromFavoritesEvent() {
    this.photoLibraryService.removeFromFavorites.subscribe(
      photo => {
        const index = this.photoList.indexOf(photo);
        this.photoList.splice(index, 1);
        this.snackBar.open('Removed from Favorites', 'Close', {
          duration: 2000
        });
      }
    )
  }
}
