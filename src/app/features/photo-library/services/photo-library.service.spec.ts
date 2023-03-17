import { TestBed } from '@angular/core/testing';

import { PhotoLibraryService } from './photo-library.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('PhotosService', () => {
  let service: PhotoLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PhotoLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
