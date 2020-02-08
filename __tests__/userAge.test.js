import { UserAge } from '../src/userAge.js/';
import { exportAllDeclaration, tsImportEqualsDeclaration } from '@babel/types';

describe('UserAge', () => {

  test('age should have a value', () => {
    let earth = new UserAge(20);
    expect(earth.age).toEqual(20);
  });

  test('cryo years should have a value', () => {
    let earth = new UserAge(20);
    expect(earth.cryoYears).toEqual(20);
  });

  test('should return users bonus years', () => {
  	let stillAlive = new UserAge(90);
  	expect(stillAlive.bonusYears).toEqual(10);
  });

  test('should return calculations for Mercury', () => {
  	let userAge = new UserAge(20);
  	expect(userAge.mercurianCalculator()).toEqual(["83.33", "250.00"]);
  });

  test('should return calculations for Mercury with bonus year', () => {
  	let userAge = new UserAge(90);
  	expect(userAge.mercurianCalculator()).toEqual(["375.00", "-41.67", 41.67]);
  });

  test('should return calculations for Venus', () => {
  	let userAge = new UserAge(20);
  	expect(userAge.venutianCalculator()).toEqual(["32.26", "96.77"]);
  });

  test('should return calculations for Venus with bonus year', () => {
  	let userAge = new UserAge(90);
  	expect(userAge.venutianCalculator()).toEqual(["145.16", "-16.13", 16.13]);
  });

  test('should return calculations for Mars', () => {
  	let userAge = new UserAge(20);
  	expect(userAge.martianCalculator()).toEqual(["10.64", "31.91"]);
  });

  test('should return calculations for Mars with bonus year', () => {
  	let userAge = new UserAge(90);
  	expect(userAge.martianCalculator()).toEqual(["47.87", "-5.32", 5.32]);
  });

  test('should return calculations for Jupiter', () => {
  	let userAge = new UserAge(20);
  	expect(userAge.jovianCalculator()).toEqual(["1.69", "5.06"]);
  });

  test('should return calculations for Jupiter with bonus year', () => {
  	let userAge = new UserAge(90);
  	expect(userAge.jovianCalculator()).toEqual(["7.59", "-0.84", .84]);
  });

});
