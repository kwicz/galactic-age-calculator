import { arrayExpression } from "@babel/types";
import { getChangedFilesForRoots } from "jest-changed-files";

// Create base values for user
export class Earth {
  constructor(age) {
    this.age = age;
    this.lifeExp = undefined;
  };

  // Ensure number is given by user
  checkNumber() {
  	let number = /\d+/;
  	let result = number.test(this.age);
  	if (result === true) {
  		return "input is a number";
  	} else {
  		return "input is not a number";
  	};
  };

  // Assume all people have a life expectancy of 80
  calculateLifeExp() {
  	this.lifeExp = 80 - this.age;
  	if (this.lifeExp < 0) {
  		return Math.abs(this.lifeExp);
  	} else {
  		return this.lifeExp;
  	}
  };

};