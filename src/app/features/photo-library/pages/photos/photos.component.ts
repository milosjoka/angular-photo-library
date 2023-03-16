import {Component, OnDestroy, OnInit} from '@angular/core';
import {SpinnerService} from "../../../spinner/services/spinner.service";
import {PhotosService} from "../../services/photos.service";
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
    private photosService: PhotosService
  ) {
  }

  ngOnInit(): void {
    this.initPhotoList();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  private initPhotoList(): void {
    this.photosService.getPhotoList()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(res => {
        this.photoList = res;
      })
  }
}
