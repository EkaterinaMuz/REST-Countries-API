import { Region } from "./region";
export type Currency = {
  code: string;
  name: string;
  symbol: string;
};

export type Language = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};
export type Country = {
  nativeName: string,
  name: string,
  flag: string,
  flags: {
    png: string,
    svg: string
  }
  topLevelDomain: string[],
  population: number,
  region: Region,
  subRegion: string,
  capital: string,
  currency: Currency[]
  borders: string[],
  languages: Language[]
};


export type Info = {
  title: string,
  description: string
};

export type CountryInfo = {
  img: string,
  name: string,
  info: Info[],
};

