import { Earth } from '../src/earth.js/';
import { exportAllDeclaration, tsImportEqualsDeclaration } from '@babel/types';


describe('Earth', () => {

  test('age should have a value', () => {
    let earth = new Earth(20);
    expect(earth.age).toEqual(20);
  });

  test('should determine input is not an int', () => {
  	let notNumber = new Earth("twenty");
  	expect(notNumber.checkNumber()).toEqual("input is not a number");
  });

  test('should determine input is an int', () => {
  	let number = new Earth(20);
  	expect(number.checkNumber()).toEqual("input is a number");
  });  

});



  // describe('Haiku', () => {
  //   test('should have a value in each line', () => {
  //    let haikuLines = new HaikuLines(1, 2, 3);
  //     expect(haikuLines.line1).toEqual(1);
  //     expect(haikuLines.line2).toEqual(2);
  //     expect(haikuLines.line3).toEqual(3);

  //   });
    
  //   test('Input should NOT contain an number', () => {
  //     let haikuLines = new HaikuLines("1", "nan", "nan");
  //     expect(haikuLines.numberCheck()).toEqual("error");
  //   });
    
  //   test('Input should NOT contain an number', () => {
  //     let haikuLines = new HaikuLines("nan", "nan", "nan");
  //     expect(haikuLines.numberCheck()).toEqual("success");
  //   });
    
  //   test('Input should not accept puntuation', () => {
  //     let haikuLines = new HaikuLines("&", "nan", "nan");
  //     expect(haikuLines.puncCheck()).toEqual("fail");
  //   });
    
  //   test('Input should succeed if recieving 3 nans', () => {
  //     let haikuLines = new HaikuLines("nan", "nan", "nan");
  //     expect(haikuLines.puncCheck()).toEqual("success");
  //   });

  //   test('Input should return number of vowels', () => {
  //     let haikuLines = new HaikuLines("thermos", "seven", "eleven");
  //     expect(haikuLines.syllableCheck()).toEqual([2, 2, 3]);
  //   });

  //   test('Input should return number of vowels except "e" at the end of a word', () => {
  //     let haikuLines = new HaikuLines("malice", "compute", "lemon");
  //     expect(haikuLines.syllableCheck()).toEqual([2,2,2]);
  //   });

  //   test('Input should return number of vowels except "e" at the end of the word and the second vowel of a dipthong', () => {
  //     let haikuLines = new HaikuLines("breathe", "cooper", "bamboozled");
  //     expect(haikuLines.syllableCheck()).toEqual([1,2,3]);
  //   });

  // });