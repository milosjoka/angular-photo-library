import {Component, Input, OnInit} from '@angular/core';
import {PhotoModel} from "../../data-models/photo.model";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit{
  @Input() photo!: PhotoModel;

  constructor() {
  }

  onAddFavorite(photo: PhotoModel |undefined) {

  }

  ngOnInit(): void {
    console.log(this.photo);
  }
}
