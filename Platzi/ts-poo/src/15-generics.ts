import { Dog } from './09-protected';

/* function getValue(value: unknown) {
  return value;
}

function getValue(value: number | string) {
  return value;
} */

function getValue<myType>(value: myType) {
  const array: myType[] = [value];
  return value;
}

getValue<number>(12).toFixed();
getValue<string>('12').toLowerCase();
getValue<number[]>([]).forEach;
const fifi = new Dog('fifi', 'juan');
getValue<Dog>(fifi).woof;
