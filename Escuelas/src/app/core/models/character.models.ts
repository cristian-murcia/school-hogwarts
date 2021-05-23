import { IWand } from './wand.models';

export interface ICharacters {
  name: string,
  species?: string,
  gender?: string,
  house?: string,
  dateOfBirth?: string,
  yearOfBirth: number,
  ancestry?: string,
  eyeColour?: string,
  hairColour?: string,
  wand?: IWand,
  patronus: string,
  hogwartsStudent?: boolean,
  hogwartsStaff?: boolean,
  actor?: string,
  alive?: boolean,
  image: string

}

