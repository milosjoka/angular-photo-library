import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PhotoModel} from "../data-models/photo.model";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private PICSUM_PHOTO_LIST_URL = 'https://picsum.photos/v2/list';

  constructor(private http: HttpClient) {
  }

  public getPhotoList(pageIndex: number = 1, limit: number = 12): Observable<PhotoModel[]> {
    return this.http.get<PhotoModel[]>(`${this.PICSUM_PHOTO_LIST_URL}?page=${pageIndex}&limit=${limit}`);
  }

}
