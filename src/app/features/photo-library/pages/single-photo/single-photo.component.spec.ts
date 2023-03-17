import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SinglePhotoComponent} from './single-photo.component';
import {MatSnackBar} from "@angular/material/snack-bar";
import {PhotoLibraryService} from "../../services/photo-library.service";
import {EMPTY, Observable, of} from "rxjs";
import {PhotoModel} from "../../data-models/photo.model";
import {EventEmitter} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

class PhotoLibraryServiceStub {
  getPhotoFavoritesList(pageIndex: number = 1, limit: number = 12): Observable<PhotoModel[]> {
    return of([]);
  }

  public removeFromFavorites: EventEmitter<PhotoModel> = new EventEmitter<PhotoModel>();
}

class ActivatedRouteStub {
  params: Observable<any> = EMPTY;
  snapshot: { data: {photo: PhotoModel}} = {data: {photo: {} as PhotoModel} }
}

describe('SinglePhotoComponent', () => {
  let component: SinglePhotoComponent;
  let fixture: ComponentFixture<SinglePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SinglePhotoComponent],
      providers: [
        MatSnackBar,
        {
          provide: PhotoLibraryService,
          useClass: PhotoLibraryServiceStub
        },
        {
          provide: ActivatedRoute,
          useClass: ActivatedRouteStub
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SinglePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
