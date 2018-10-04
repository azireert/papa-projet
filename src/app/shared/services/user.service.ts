import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private dataURL = 'assets/user.php';
  constructor(private http: HttpClient) { }

    getUser(): Observable<User[]> {
        return this.http.get<User[]>(this.dataURL);
    }
}
