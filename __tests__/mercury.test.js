import { Mercury } from '../src/mercury.js/';
import { exportAllDeclaration, tsImportEqualsDeclaration } from '@babel/types';


describe('Mercury', () => {

  test('age should have a value', () => {
    let mercury = new Mercury();
    expect(mercury.age).toEqual(20);
  });

});