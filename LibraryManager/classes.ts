import * as Interfaces from './interfaces';

export class UniversityLibrarian implements Interfaces.Librarian {

  name: string;
  email: string;
  department: string;

  assistCustomer(custName: string): void {
    console.log(`${this.name} is assisting ${custName}`);
  }
}

export abstract class ReferenceItem {

  private _publisher: string;
  static department: string = 'Research';

  constructor(public title: string, protected year: number) {
    console.log('Creating a new ReferenceItem...');
  }
  
  printItem(): void {
    console.log(`${this.title} was published in ${this.year}`);
    console.log(`Department: ${ReferenceItem.department}`);
  }

  set publisher(newPublisher: string) {
    this._publisher = newPublisher;
  }

  get publisher(): string {
    return this._publisher.toUpperCase();
  }

  abstract printCitation(): void;
}

  