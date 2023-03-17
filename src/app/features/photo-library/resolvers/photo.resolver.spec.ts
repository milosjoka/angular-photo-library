import { TestBed } from '@angular/core/testing';

import { PhotoResolver } from './photo.resolver';
import {RouterTestingModule} from "@angular/router/testing";
import {Observable, of} from "rxjs";
import {PhotoModel} from "../data-models/photo.model";
import {EventEmitter} from "@angular/core";
import {PhotoLibraryService} from "../services/photo-library.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

class PhotoLibraryServiceStub {
  getPhotoFavoritesList(pageIndex: number = 1, limit: number = 12): Observable<PhotoModel[]> {
    return of([]);
  }

  public removeFromFavorites: EventEmitter<PhotoModel> = new EventEmitter<PhotoModel>();
}

describe('PhotoResolver', () => {
  let resolver: PhotoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        {
          provide: PhotoLibraryService,
          useCLass: PhotoLibraryServiceStub
        }
      ]
    });
    resolver = TestBed.inject(PhotoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
