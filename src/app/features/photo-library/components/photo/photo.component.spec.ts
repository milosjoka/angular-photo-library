import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoComponent } from './photo.component';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Observable, of} from "rxjs";
import {PhotoModel} from "../../data-models/photo.model";
import {EventEmitter} from "@angular/core";
import {PhotoLibraryService} from "../../services/photo-library.service";

class PhotoLibraryServiceStub {
  getPhotoFavoritesList(pageIndex: number = 1, limit: number = 12): Observable<PhotoModel[]> {
    return of([]);
  }
  public removeFromFavorites: EventEmitter<PhotoModel> = new EventEmitter<PhotoModel>();
}
describe('PhotoComponent', () => {
  let component: PhotoComponent;
  let fixture: ComponentFixture<PhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoComponent ],
      providers: [
        MatSnackBar,
        {
          provide: PhotoLibraryService, useClass: PhotoLibraryServiceStub
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
