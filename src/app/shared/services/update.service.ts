import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  private dataURL = 'assets/update.php';
  constructor(private http: HttpClient) { }

    updateUser(user: User): Observable<any> {
        return this.http.post<User[]>(this.dataURL , user);
    }
}
