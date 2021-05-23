import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeachersComponent } from './components/teachers/teachers.component';

const routes: Routes = [
  {
    path: '',
    component: TeachersComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: TeachersComponent,
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TeacherRoutingModule { }
