import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Username} from '../username';
import {SearchService} from '../search.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  providers:  [SearchService],
  styleUrls: ['./username.component.css']
})

export class UsernameComponent implements OnInit {
username: Username;
  constructor(private searchservice: SearchService) {
  this.searchservice = searchservice; }

  ngOnInit() {
this.searchservice.getUsername();
this.username = this.searchservice.username;
  }

}
