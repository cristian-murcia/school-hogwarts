import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private _http: HttpClient
  ) { }

  /**
   * Get all the students
   * @param school
   * @returns
   */
  public getAllStudents(): Observable<any>{

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(environment.serverUrl + `characters/students`, { headers: headers });
  }


}
