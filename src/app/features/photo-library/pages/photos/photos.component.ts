import {Component, OnDestroy, OnInit} from '@angular/core';
import {SpinnerService} from "../../../spinner/services/spinner.service";
import {PhotoLibraryService} from "../../services/photo-library.service";
import {Observable, Subject, takeUntil, tap} from "rxjs";
import {PhotoModel} from "../../data-models/photo.model";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit, OnDestroy {
  public scrollCallback: any;
  public photoList: PhotoModel[] = [];
  private destroy$: Subject<boolean> = new Subject<boolean>();
  private pageIndex: number = 1;

  constructor(
    private spinnerService: SpinnerService,
    private photoLibraryService: PhotoLibraryService
  ) {
    this.scrollCallback = this.onScroll.bind(this);
  }

  ngOnInit(): void {
    this.initPhotoList();
  }

  private initPhotoList(): void {
    this.spinnerService.startSpinner();
    this.photoLibraryService.getPhotoList(this.pageIndex)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(res => {
        this.pageIndex++;
        this.photoList = res;
        this.spinnerService.stopSpinner();
      })
  }

  public onScroll():Observable<PhotoModel[]> {
    this.spinnerService.startSpinner();
    return this.photoLibraryService.getPhotoList(this.pageIndex).pipe(
      tap((res: PhotoModel[]) => {
        this.pageIndex++;
        this.photoList.push(...res);
        this.spinnerService.stopSpinner();
      })
    )
  }

  public trackById(index: number, item: PhotoModel) {
    return item ? item.id : null;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
