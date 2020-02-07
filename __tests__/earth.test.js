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
  	expect(userAge.mercurianCalculator()).toEqual(["83.33", "250.00"]);
  });

  test('should return calculated age on Venus', () => {
  	let userAge = new UserAge(20);
  	expect(userAge.venutianCalculator()).toEqual(["32.26", "96.77"]);
  });

  test('should return calculated age on Mars', () => {
  	let userAge = new UserAge(20);
  	expect(userAge.martianCalculator()).toEqual(["10.64", "31.91"]);
  });

  test('should return calculated age on Jupiter', () => {
  	let userAge = new UserAge(20);
  	expect(userAge.jovianCalculator()).toEqual(["1.69", "5.06"]);
  });

});
