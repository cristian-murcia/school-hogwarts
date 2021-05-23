import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacters } from 'src/app/core/models/character.models';
import { IListTable } from 'src/app/shared/models/list-table.interface';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  public character: Array<IListTable>;
  public error: boolean = false;
  public escuelas: Array<any> = [
    { name: 'Slytherin' },
    { name: 'Gryffindor' },
    { name: 'Ravenclaw' },
    { name: 'Hufflepuff' },
  ]

  constructor(
    private readonly _characterService: CharacterService,
  ) { }

  ngOnInit(): void { }

  /**
   * Get all character for School
   * @param school
   */
  public getAllCharacter(event: any) {
    this.character = [];

    this._characterService.getCharacterForSchool(event.value).subscribe(result => {

      if (result && result.length > 0) {
        let characters: ICharacters[] = result;
        this.character = characters.map(ch => {
          return {
            Name: ch.name,
            Patronus: ch.patronus,
            Age: ch.yearOfBirth,
            Imagen: ch.image
          }
        });

      } else {
        this.error = true;
      }
    });
  }

}
