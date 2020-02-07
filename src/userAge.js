import { arrayExpression } from "@babel/types";
import { getChangedFilesForRoots } from "jest-changed-files";

// Create base values for user
export class UserAge {
  constructor(age) {
    this.age = age;
    this.lifeExp = 80 - age;
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
  	if (this.lifeExp < 0) {
  		return Math.abs(this.lifeExp);
  	} else {
  		return this.lifeExp;
  	}
  };

  mercuryAge() {
  	let mercuryAge = this.age / .24;
  	return mercuryAge.toFixed(2);
  }

  mercuryLifeExp() {
  	let mercuryLifeExp = this.lifeExp / .24;
  	return mercuryLifeExp.toFixed(2);
  }

  venusAge() {
  	let venusAge = this.age / .62;
  	return venusAge.toFixed(2);
  }

  venusLifeExp() {
  	let venusLifeExp = this.lifeExp / .62;
  	return venusLifeExp.toFixed(2);
  }

  marsAge() {
  	let marsAge = this.age / 1.88;
  	return marsAge.toFixed(2);
  }

  jupiterAge() {
  	let jupiterAge = this.age / 11.86;
  	return jupiterAge.toFixed(2);
  }

};