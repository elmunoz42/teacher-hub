import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { DataService } from './data.service';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { LevelPipe } from './level.pipe';
import { AdminComponent } from './admin/admin.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { LessonComponent } from './lesson/lesson.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    AboutComponent,
    StudentDetailComponent,
    LevelPipe,
    AdminComponent,
    EditStudentComponent,
    LessonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
