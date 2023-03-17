import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosComponent } from './photos.component';
import {Observable, of} from "rxjs";
import {PhotoModel} from "../../data-models/photo.model";
import {EventEmitter} from "@angular/core";
import {PhotoLibraryService} from "../../services/photo-library.service";
class PhotoLibraryServiceStub {
  getPhotoFavoritesList(pageIndex: number = 1, limit: number = 12): Observable<PhotoModel[]> {
    return of([]);
  }

  public getPhotoList(pageIndex: number = 1, limit: number = 12): Observable<PhotoModel[]> {
    return of([]);
  }
  public removeFromFavorites: EventEmitter<PhotoModel> = new EventEmitter<PhotoModel>();
}

// describe('PhotosComponent', () => {
//   let component: PhotosComponent;
//   let fixture: ComponentFixture<PhotosComponent>;
//
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ PhotosComponent ],
//       providers: [
//         {
//           provide: PhotoLibraryService,
//           useClass: PhotoLibraryServiceStub
//         },
//
//       ]
//     })
//     .compileComponents();
//
//     fixture = TestBed.createComponent(PhotosComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
