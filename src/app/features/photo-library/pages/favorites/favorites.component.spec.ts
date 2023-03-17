import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesComponent } from './favorites.component';
import {PhotoLibraryService} from "../../services/photo-library.service";
import {Observable, of} from "rxjs";
import {PhotoModel} from "../../data-models/photo.model";
import {EventEmitter} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";

class PhotoLibraryServiceStub {
  getPhotoFavoritesList(pageIndex: number = 1, limit: number = 12): Observable<PhotoModel[]> {
    return of([]);
  }
  public removeFromFavorites: EventEmitter<PhotoModel> = new EventEmitter<PhotoModel>();
}
// describe('FavoritesComponent', () => {
//   let component: FavoritesComponent;
//   let fixture: ComponentFixture<FavoritesComponent>;
//
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ FavoritesComponent ],
//       providers: [
//         MatSnackBar,
//         {
//           provide: PhotoLibraryService,
//           useClass: PhotoLibraryServiceStub
//         }
//       ]
//     })
//     .compileComponents();
//
//     fixture = TestBed.createComponent(FavoritesComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
