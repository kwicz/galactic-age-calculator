import { arrayExpression } from "@babel/types";
import { getChangedFilesForRoots } from "jest-changed-files";

// Create base values for user
export class UserAge {
  constructor(age) {
    this.age = age;
    this.lifeExp = 80 - age;
    this.mercury = [];
    this.venus =[];
    this.mars =[];
    this.jupter =[];
  };

  // Ensure integer is given by user
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
  	};
  };

  mercurianCalculator() {
  	this.mercury[0] = (this.age / .24).toFixed(2);
  	this.mercury[1] = (this.lifeExp / .24).toFixed(2);
  	return this.mercury;
  }

  venutianCalculator() {
  	this.venus[0] = (this.age / .62).toFixed(2);
  	this.venus[1] = (this.lifeExp / .62).toFixed(2);
  	return this.venus;
  }

  marsAge() {
  	let marsAge = this.age / 1.88;
  	return marsAge.toFixed(2);
  }

  marsLifeExp() {
  	let marsLifeExp = this.lifeExp / 1.88;
  	return marsLifeExp.toFixed(2);
  }  

  jupiterAge() {
  	let jupiterAge = this.age / 11.86;
  	return jupiterAge.toFixed(2);
  }

  jupiterLifeExp() {
  	let jupiterLifeExp = this.lifeExp / 11.86;
  	return jupiterLifeExp.toFixed(2);
  }
};