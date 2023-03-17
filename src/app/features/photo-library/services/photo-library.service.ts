import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, Observable, of, throwError} from "rxjs";
import {PhotoModel} from "../data-models/photo.model";

@Injectable({
  providedIn: 'root'
})
export class PhotoLibraryService {
  private PICSUM_PHOTO_LIST_URL = 'https://picsum.photos/v2/list';
  private FAVORITES_LOCAL_STORAGE_KEY = 'favorites';

  public removeFromFavorites: EventEmitter<PhotoModel> = new EventEmitter<PhotoModel>();

  constructor(private http: HttpClient) {
  }

  public getPhotoList(pageIndex: number = 1, limit: number = 12): Observable<PhotoModel[]> {
    return this.http.get<PhotoModel[]>(`${this.PICSUM_PHOTO_LIST_URL}?page=${pageIndex}&limit=${limit}`)
      .pipe(
        delay(300)
      );
  }

  public addPhotoToFavoritesAtLocalStorage(photo: PhotoModel): void {
    let items: PhotoModel[] = [];
    const favorites = localStorage.getItem(this.FAVORITES_LOCAL_STORAGE_KEY);

    if (favorites !== null) {
      items = JSON.parse(favorites);
    }

    items.push(photo);
    localStorage.setItem(this.FAVORITES_LOCAL_STORAGE_KEY, JSON.stringify(items));
  }

  getPhotoFavoritesList(): PhotoModel[] {
    const favorites = localStorage.getItem(this.FAVORITES_LOCAL_STORAGE_KEY);
    if (favorites !== null) {
      return JSON.parse(favorites);
    }

    return [];
  }

  removePhotoFromFavoritesAtLocalStorage(photo: PhotoModel): void {
    const favoritesAsJsonString = localStorage.getItem(this.FAVORITES_LOCAL_STORAGE_KEY);
    if (favoritesAsJsonString !== null) {
      let favorites: PhotoModel[] = JSON.parse(favoritesAsJsonString);
      localStorage.setItem(this.FAVORITES_LOCAL_STORAGE_KEY, JSON.stringify(favorites.filter(item => item.id != photo.id)));
      this.removeFromFavorites.emit(photo);
    }
  }

  getPhotoById(id: string): Observable<PhotoModel> {
    const favoritesAsJsonString = localStorage.getItem(this.FAVORITES_LOCAL_STORAGE_KEY);
    if (favoritesAsJsonString !== null) {
      let favorites: PhotoModel[] = JSON.parse(favoritesAsJsonString);
      const photo = favorites.find(item => item.id == id);
      if (photo) {
        return of(photo);
      }
    }

    return throwError(() => {
      return {
        message: 'The photo does not exist among favorites!'
      }
    });
  }
}
