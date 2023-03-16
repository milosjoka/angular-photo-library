import { Injectable } from '@angular/core';
import {BehaviorSubject, distinctUntilChanged, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private spinnerSubject = new BehaviorSubject<boolean>(false);
  public isSpinnerActive$: Observable<boolean> = this.spinnerSubject.asObservable()
    .pipe(
      distinctUntilChanged()
    );

  constructor() { }

  public startSpinner() {
    this.spinnerSubject.next(true);
  }

  public stopSpinner() {
    this.spinnerSubject.next(false);
  }
}
