import { Component, OnInit } from '@angular/core';
import { ICharacters } from 'src/app/core/models/character.models';
import { IListTable } from 'src/app/shared/models/list-table.interface';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public student: Array<IListTable> = [];
  public error: boolean = false;

  constructor(
    private readonly _studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  /**
   * Get All Student
   */
  public getAllStudents(): void {
    this._studentService.getAllStudents().subscribe(result => {

      if (result && result.length > 0) {
        let characters: ICharacters[] = result;
        this.student = characters.map(ch => {
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
    })


  }
}
