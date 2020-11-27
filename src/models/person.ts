export enum Gender {
  Male = 'male',
  Female = 'female',
  NA = 'n/a',
}

export interface Person {
  name: string;
  height: string;
  mass: string;
  birthYear: string;
  gender: Gender;
  id: string; // url
  filmUrls: string[];
}
