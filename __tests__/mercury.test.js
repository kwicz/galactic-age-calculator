import { Mercury } from '../src/mercury.js/';
import { exportAllDeclaration, tsImportEqualsDeclaration } from '@babel/types';


describe('Mercury', () => {

  test('age should have a value', () => {
    let mercury = new Mercury(20);
    expect(mercury.age).toEqual(20);
  });

});