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
  	this.age = earth.age / this.year;
  	return this.age;
  };



};