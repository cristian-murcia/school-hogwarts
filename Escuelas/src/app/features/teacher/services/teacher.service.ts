import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(
    private _http: HttpClient
  ) { }

  /**
   * Get all the teachers
   * @param school
   * @returns
   */
  public getAllTeachers(): Observable<any>{

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(environment.serverUrl + `characters/staff`, { headers: headers });
  }
}
