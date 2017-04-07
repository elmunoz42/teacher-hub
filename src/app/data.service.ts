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

  getStudentById(studentId: string) {
    return this.angularFire.database.object('/students/' + studentId);
  }

  addStudent(newStudent: Student) {
  this.students.push(newStudent);
  }

  updateStudent(localUpdatedStudent){
   var studentEntryInFirebase = this.getStudentById(localUpdatedStudent.$key);
   studentEntryInFirebase.update({name: localUpdatedStudent.name,
                               level: localUpdatedStudent.level,
                               notes: localUpdatedStudent.notes});
 }

 deleteStudent(localStudentToDelete){
    var studentEntryInFirebase = this.getStudentById(localStudentToDelete.$key);
    studentEntryInFirebase.remove();
  }

}
