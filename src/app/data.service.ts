import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class DataService {

  students: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.students = angularFire.database.list('students');
  }

  getStudents() {
    return this.students;
  }
}