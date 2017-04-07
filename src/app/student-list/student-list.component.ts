import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { DataService } from '../data.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: FirebaseListObservable<any[]>;

  constructor(public service: DataService) { }

  ngOnInit() {
    this.students = this.service.getStudents();
  }

}
