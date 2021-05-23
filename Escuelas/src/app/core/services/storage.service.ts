import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IListTable } from 'src/app/shared/models/list-table.interface';
import { ICharacters } from '../models/character.models';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public requestStudent = new Subject<IListTable[]>();

  constructor() {
  }

  /**
   * Almacena solicitudes en el sessionStorage y retorna un observable
   * @param studentNew
   */
  public saveStudent(studentNew?: IListTable): Observable<any> {

    let studentSaving: Array<IListTable> = [];
    let dataSaving = localStorage.getItem('student');

    if (studentNew) {
      if (!localStorage.getItem('student')) {
        let data = [
          studentNew
        ]
        localStorage.setItem('student', JSON.stringify(data));
        this.requestStudent.next(JSON.parse(localStorage.getItem('student')!));

      } else {
        studentSaving.push(...JSON.parse(dataSaving!), studentNew);
        localStorage.removeItem('student');
        localStorage.setItem('student', JSON.stringify(studentSaving));

        this.requestStudent.next(studentSaving);
      }
    } else {
      this.requestStudent.next(JSON.parse(dataSaving!));
    }

    return this.requestStudent;
  }
}
