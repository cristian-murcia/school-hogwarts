import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SchoolsComponent } from './components/schools/schools.component';

const routes: Routes = [
  {
    path: '',
    component: SchoolsComponent,
    children: [
      {
        path: '',
        redirectTo: 'schools',
        pathMatch: 'full'
      },
      {
        path: 'schools',
        component: SchoolsComponent
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
export class CharacterRoutingModule { }
