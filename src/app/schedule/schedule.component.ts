import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  adminLogin: boolean = false;

  constructor(public admin: AppComponent) { }

  ngOnInit() {

    this.adminLogin = this.admin.adminLogin;

  }


}
