import { Component } from '@angular/core';
import { Student } from './student.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Jimi Mark's Teacher-Hub";
  adminLogin: boolean = false;

  constructor(public router: Router) { }

  login(){
    if(prompt("user-name: ")==="Jimi Marks"&&prompt("password: ")==="0007"){
      this.adminLogin = true;
      alert("You are logged in");
    } else {
      alert("Please try again.");
    }
  }
  logout(){
    this.adminLogin = false;
    alert("You are logged out");
    this.router.navigate(['']);
  }
}
