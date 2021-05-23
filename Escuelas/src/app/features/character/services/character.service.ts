import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { ICharacters } from 'src/app/core/models/character.models';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private _http: HttpClient
  ) { }

  /**
   * Get All character for schools
   * @param school
   * @returns
   */
  public getCharacterForSchool(school: string): Observable<any>{

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(environment.serverUrl + `characters/house/${school}`, { headers: headers });
  }


}
