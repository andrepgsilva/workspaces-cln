import Company from "../core/entity/Company";

export default class CompanyAdapter {
  static create(identification: string, name: string, date: Date): Company {
    return new Company(identification, name, date);
  }
}