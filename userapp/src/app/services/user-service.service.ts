import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

getUsers():Observable<User[]>{
  return this.http.get<User[]>(this.apiUrl);
  }
  getUserById(id:number):Observable<User>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url);
  }
  createUser(user:User):Observable<User>{
    return this.http.post<User>(this.apiUrl,user);
  }
  updateUser(id:number,user:User):Observable<User>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<User>(url,user);
  }

  deleteUser(id:number):Observable<void>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
