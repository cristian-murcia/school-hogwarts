import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsComponent } from './components/schools/schools.component';
import { CharacterRoutingModule } from './character-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [SchoolsComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedModule
  ]
})
export class CharacterModule { }
