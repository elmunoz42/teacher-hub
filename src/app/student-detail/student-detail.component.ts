import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})

export class StudentDetailComponent implements OnInit {

  studentId: string;
  studentToDisplay;
  constructor(private route: ActivatedRoute, private location: Location, private service: DataService) { }

  ngOnInit() {

    this.route.params.forEach((urlParameters) => {
     this.studentId = urlParameters['id'];
      });
    this.studentToDisplay = this.service.getStudentById(this.studentId);
  }

}
