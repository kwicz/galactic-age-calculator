import { arrayExpression } from "@babel/types";
import { getChangedFilesForRoots } from "jest-changed-files";

// Business-Logic


export class Earth {
  constructor(age, lifeExp) {
    this.age = age;
    this.lifeExp = lifeExp;
  };

  checkNumber() {
  	let number = /\d+/;
  	let result = number.test(this.age);
  	if (result === true) {
  		return "input is a number";
  	} else {
  		return "input is not a number";
  	}
  };


};