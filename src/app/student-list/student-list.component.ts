import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { DataService } from '../data.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { LevelPipe } from '../level.pipe';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  currentLevel: string = "all-levels";

  constructor(public service: DataService, public router: Router) { }

  ngOnInit() {
    this.students = this.service.getStudents();
  }


  onChange(optionFromMenu) {
    this.currentLevel = optionFromMenu;
  }

  goToDetailPage(clickedStudent) {
   this.router.navigate(['students', clickedStudent.$key]);
 };

}
