import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { DataService } from '../data.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  
  constructor(public service: DataService, public router: Router) { }

  ngOnInit() {
    this.students = this.service.getStudents();
  }

  goToDetailPage(clickedStudent) {
   this.router.navigate(['students', clickedStudent.$key]);
 };

}
