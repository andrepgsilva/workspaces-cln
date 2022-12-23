export default class Company {
  identification: string;
  name: string;
  date: Date;
  
  constructor(identification: string, name: string, date: Date) {
    if (! this.isIdentificationValid(identification)) return;

    this.identification = identification;
    this.name = name;
    this.date = date;
  }

  isIdentificationValid(identification: string) {
    if (! /[A-Z]{3}-[0-9]{4}/.test(identification)) {
      throw new Error('Invalid Company Identification');
    }

    return true;
  }
}