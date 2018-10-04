import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Training} from '../model/training.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataURL = 'assets/data.php';
  constructor(private http: HttpClient) { }

    getAllData(): Observable<Training[]> {
        return this.http.get<Training[]>(this.dataURL);
    }
}
