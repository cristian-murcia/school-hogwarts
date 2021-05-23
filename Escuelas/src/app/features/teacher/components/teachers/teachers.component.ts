import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacters } from 'src/app/core/models/character.models';
import { IListTable } from 'src/app/shared/models/list-table.interface';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  public teacher: Array<IListTable> = [];
  public error: boolean;

  constructor(
    private readonly _teacherService: TeacherService
  ) { }

  ngOnInit(): void {
    this.getAllTeachers();
  }

  /**
   * Get all character for School
   * @param school
   */
  public getAllTeachers(): void{
    this._teacherService.getAllTeachers().subscribe(result => {

      if (result && result.length > 0) {
        let teachers: ICharacters[] = result;
        this.teacher = teachers.map(ch => {
          return {
            Name: ch.name,
            Patronus: ch.patronus,
            Age: ch.yearOfBirth,
            Imagen: ch.image
          }
        })


      } else {
        this.error = true;
      }
    });
  }

}
