import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  usrdata: any;
  constructor() { }

  ngOnInit() {
    let username = localStorage.getItem(('usrname'));
    this.usrdata = [
      {'name': username, 'country': 'India', 'state': 'AP', 'city': 'Hyderabad'}
    ];
  }
  clearUserData() {
    localStorage.clear();
  }

}
