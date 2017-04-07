import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { AboutComponent } from './about/about.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: StudentListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'students/:id',
    component: StudentDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
