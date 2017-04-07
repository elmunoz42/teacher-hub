import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  @Input() selectedStudent;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  beginUpdatingStudent(studentToUpdate){
    this.dataService.updateStudent(studentToUpdate);
  }

  beginDeletingStudent(studentToDelete){
    if(confirm("Are you sure you want to delete this students from your roster?")){
      this.dataService.deleteStudent(studentToDelete);
    }
  }
}
