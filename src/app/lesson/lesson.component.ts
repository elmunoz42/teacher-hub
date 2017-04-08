import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  adminLogin: boolean = false;

  constructor(public admin: AppComponent) { }

  ngOnInit() {

    this.adminLogin = this.admin.adminLogin;

  }

}
