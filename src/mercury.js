import { arrayExpression } from "@babel/types";
import { getChangedFilesForRoots } from "jest-changed-files";
import { Earth } from './earth.js';

// Create base values for user


export class Mercury {
  constructor(age) {
    this.year = .24
    this.age = age;
    this.lifeExp = undefined;
  };

  calculateAge() {
  	var earth = new Earth(20);
  	console.log("Earth Age: " + earth.age);
  	this.age = earth.age / this.year;
  	return this.age.toFixed(2);
  };

};