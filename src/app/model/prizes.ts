export interface Laureates{
    id:number;
    firstname:string;
    surname:string;
    motivation:string;
    share:number
  }
  
  export interface prizes{
    year:number;
    category:string;
    laureates:Laureates;
  }