import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Training} from '../model/training.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private dataURL = 'http://localhost:3000/training';
  constructor(private http: HttpClient) { }

    postTraining(training: Training): Observable<any> {
        return this.http.post<Training[]>(this.dataURL , training);
    }

    getAllData(): Observable<Training[]> {
        return this.http.get<Training[]>(this.dataURL);
    }
}
