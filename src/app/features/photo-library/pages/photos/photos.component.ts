import {Component, OnDestroy, OnInit} from '@angular/core';
import {SpinnerService} from "../../../spinner/services/spinner.service";
import {PhotoLibraryService} from "../../services/photo-library.service";
import {Subject, takeUntil} from "rxjs";
import {PhotoModel} from "../../data-models/photo.model";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit, OnDestroy {
  public photoList: PhotoModel[] = [];
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private spinnerService: SpinnerService,
    private photoLibraryService: PhotoLibraryService
  ) {
  }

  ngOnInit(): void {
    this.initPhotoList();
  }

  private initPhotoList(): void {
    this.photoLibraryService.getPhotoList()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(res => {
        this.photoList = res;
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
