import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Username} from './username';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  username: Username;
  Name: string;

  constructor(private http: HttpClient) {
   this.username = new Username('' , '' , '');
   this.Name = 'Feysal-Ibrahim';
  }
  getUsername() {
    interface ApiResponse {
name: string;
login: string;
avatar_url: any;
    }
  const promise = new Promise ((resolve, reject) => {
    this.http.get <ApiResponse> (environment.apiUrl + this.Name + '?access_token=' + environment.token ).toPromise().then(response => {
      this.username.name = response.name;
      this.username.login = response.login;
      this.username.avatar_url = response.avatar_url;
      resolve();
    },    error => {
      this.username.name = 'response.name';
      this.username.login = 'response.login';
        this.username.avatar_url = 'response.avatar_url';
      reject(error);
    });
  });
return promise;
  }
}
