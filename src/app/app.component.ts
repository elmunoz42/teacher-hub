import { Component } from '@angular/core';
import { Student } from './student.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Teacher-Hub';
  // adminLogin: boolean = false;
  // TODO CHANGE BACK TO FALSE
  adminLogin: boolean = true;

  login(){
    if(prompt("user-name: ")==="Jimi Marks"&&prompt("password: ")==="0007"){
      this.adminLogin = true;
      alert("You are logged in");
    } else {
      alert("Please try again. user-name: Jimi Marks. pw: 0007");
    }
  }
  logout(){
    this.adminLogin = false;
    alert("You are logged out");
  }
}
