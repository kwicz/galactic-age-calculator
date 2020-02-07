import { arrayExpression } from "@babel/types";
import { getChangedFilesForRoots } from "jest-changed-files";

// Create base values for user
export class UserAge {
  constructor(age) {
    this.age = age;
    this.lifeExp = 80 - age;
    this.bonusYears = Math.abs(this.lifeExp);
    this.mercury = [];
    this.venus =[];
    this.mars =[];
    this.jupiter =[];
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
  calculateBonusYears() {
  	if (this.lifeExp < 0) {
  		return this.bonusYears;
  	} else {
  		return this.lifeExp;
  	};
  };

  mercurianCalculator() {
  	this.mercury[0] = (this.age / .24).toFixed(2);
  	this.mercury[1] = (this.lifeExp / .24).toFixed(2);
  	// if (this.mercury[1] < 0) {
  	// 	this.mercury[2] = Math.abs(this.lifeExp);
  	// }
  	return this.mercury;
  }

  venutianCalculator() {
  	this.venus[0] = (this.age / .62).toFixed(2);
  	this.venus[1] = (this.lifeExp / .62).toFixed(2);
  	return this.venus;
  }

  martianCalculator() {
  	this.mars[0] = (this.age / 1.88).toFixed(2);
  	this.mars[1] = (this.lifeExp / 1.88).toFixed(2);
  	return this.mars;
  } 

  jovianCalculator() {
  	this.jupiter[0] = (this.age / 11.86).toFixed(2);
  	this.jupiter[1] = (this.lifeExp / 11.86).toFixed(2);
  	return this.jupiter;
  } 

};