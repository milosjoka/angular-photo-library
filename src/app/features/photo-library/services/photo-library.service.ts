import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
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
    return this.http.get<PhotoModel[]>(`${this.PICSUM_PHOTO_LIST_URL}?page=${pageIndex}&limit=${limit}`);
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
      let favorites = JSON.parse(favoritesAsJsonString);
      const index = favorites.indexOf(photo);
      favorites.splice(index, 1);
      localStorage.setItem(this.FAVORITES_LOCAL_STORAGE_KEY, JSON.stringify(favorites));
      this.removeFromFavorites.emit(photo);
    }
  }
}
