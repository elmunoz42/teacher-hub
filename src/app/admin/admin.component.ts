import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [DataService]
})
export class AdminComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  submitForm(newName: string, newLevel: string, newNotes: string){
    let newStudent: Student = new Student(newName, newLevel, newNotes);
    this.dataService.addStudent(newStudent);
  }

}
