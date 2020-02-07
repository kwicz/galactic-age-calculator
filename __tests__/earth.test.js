import { Earth } from '../src/earth.js/';
import { exportAllDeclaration, tsImportEqualsDeclaration } from '@babel/types';

describe('Earth', () => {

  test('age should have a value', () => {
    let earth = new Earth(20);
    expect(earth.age).toEqual(20);
  });

  test('should determine age input is not an int', () => {
  	let notNumber = new Earth("twenty");
  	expect(notNumber.checkNumber()).toEqual("input is not a number");
  });

  test('should determine age input is an int', () => {
  	let number = new Earth(20);
  	expect(number.checkNumber()).toEqual("input is a number");
  });

  test('should return number of years left of life expectancy', () => {
  	let lifeExp = new Earth(20);
  	expect(lifeExp.calculateLifeExp()).toEqual(60);
  });

  test('should return number of years ago a user over 80 should have died', () => {
  	let stillAlive = new Earth(90);
  	expect(stillAlive.calculateLifeExp()).toEqual(10);
  });

});
