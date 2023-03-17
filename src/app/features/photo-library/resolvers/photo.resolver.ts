import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {catchError, Observable, throwError} from 'rxjs';
import {PhotoModel} from "../data-models/photo.model";
import {PhotoLibraryService} from "../services/photo-library.service";

@Injectable({
  providedIn: 'root'
})
export class PhotoResolver implements Resolve<PhotoModel> {
  constructor(
    private photoLibraryService: PhotoLibraryService,
    private router: Router
  ) {
  }

  handleError(error: any) {
    this.router.navigateByUrl('/');
    return throwError(error);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PhotoModel> {
    const id = route.paramMap.get('id');
    if (id === null) {
      return this.handleError(() => {
        return {
          message: 'The photo does not exist among favorites!'
        }
      })
    }

    return this.photoLibraryService.getPhotoById(id).pipe(
      catchError(err => this.handleError(err))
    );
  }
}
