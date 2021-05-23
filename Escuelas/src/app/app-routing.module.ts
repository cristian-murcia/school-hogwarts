import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'character',
    loadChildren: () =>
      import('./features/character/character.module').then(m => m.CharacterModule)
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./features/student/student.module').then(m => m.StudentModule)
  },
  {
    path: 'teacher',
    loadChildren: () =>
      import('./features/teacher/teacher.module').then(m => m.TeacherModule)
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }

