export class MyDate {
  // hay que ponerle los accesos para poder simplificar el constructor asi: el public, private, etc
  constructor(
    public year: number = 1993,
    public month: number = 7,
    private _day: number = 9
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  public add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return false;
    if (this.year % 100 === 0) return true;
    return this.year % 4 === 0;
  }
}

const myDate = new MyDate(1993, 7, 10);
//console.log(myDate.printFormat());
console.log(myDate.day);
myDate.day;
console.log(myDate.isLeapYear);

const myDate2 = new MyDate(2000, 7, 10);
console.log('2000', myDate2.isLeapYear);

const myDate3 = new MyDate(2001, 7, 10);
console.log('2001', myDate3.isLeapYear);
