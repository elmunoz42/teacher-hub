import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { AboutComponent } from './about/about.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { AdminComponent } from './admin/admin.component';
import { LessonComponent } from './lesson/lesson.component';

const appRoutes: Routes = [
  {
    path: 'students',
    component: StudentListComponent
  },
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'students/:id',
    component: StudentDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'lesson',
    component: LessonComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
