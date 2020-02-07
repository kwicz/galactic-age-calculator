import { UserAge } from '../src/userAge.js/';
import { exportAllDeclaration, tsImportEqualsDeclaration } from '@babel/types';

describe('UserAge', () => {

  test('age should have a value', () => {
    let earth = new UserAge(20);
    expect(earth.age).toEqual(20);
  });

  test('should determine age input is not an int', () => {
  	let notNumber = new UserAge("twenty");
  	expect(notNumber.checkNumber()).toEqual("input is not a number");
  });

  test('should determine age input is an int', () => {
  	let number = new UserAge(20);
  	expect(number.checkNumber()).toEqual("input is a number");
  });

  test('should return number of years left of life expectancy', () => {
  	let lifeExp = new UserAge(20);
  	expect(lifeExp.calculateLifeExp()).toEqual(60);
  });

  test('should return number of years ago a user over 80 should have died', () => {
  	let stillAlive = new UserAge(90);
  	expect(stillAlive.calculateLifeExp()).toEqual(10);
  });

  test('should return calculated age on Mercury', () => {
  	let userAge = new UserAge(20);
  	expect(userAge.mercuryAge()).toEqual("83.33");
  });

  test('should return calculated age on Venus', () => {
  	let userAge = new UserAge(20);
  	expect(userAge.venusAge()).toEqual("32.26");
  });

  // test('should return calculate mercury life expectancy', () => {
  // 	let userAge = new UserAge(20);
  // 	expect(userAge.mercuryLifeExp()).toEqual("250");
  // })

});
