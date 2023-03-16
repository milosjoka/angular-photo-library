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

  constructor(
    private snackBar: MatSnackBar,
    private photoLibraryService: PhotoLibraryService

  ) {
  }

  onAddFavorite(photo: PhotoModel) {
    this.photoLibraryService.addPhotoToFavorites(photo);
    this.snackBar.open('Added to Favorites', 'Close', {
      duration: 2000
    });
  }

  ngOnInit(): void {
    console.log(this.photo);
  }
}
