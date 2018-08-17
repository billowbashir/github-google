import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Username} from './username';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  username: Username;

  constructor(private http: HttpClient) {
   this.username = new Username('' , '');
  }
}
