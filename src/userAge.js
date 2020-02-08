import { arrayExpression } from "@babel/types";
import { getChangedFilesForRoots } from "jest-changed-files";

// Create base values for user
export class UserAge {
  constructor(age, cryoYears) {
    this.age = age;
    this.lifeExp = 80 - age;
    // this.cryoYears = cryoYears;
    // this.totalExp = cryoYears + lifeExp;
    this.bonusYears = Math.abs(this.lifeExp);
    this.mercury = [];
    this.venus =[];
    this.mars =[];
    this.jupiter =[];
  };

  mercurianCalculator() {
  	this.mercury[0] = (this.age / .24).toFixed(2);
  	this.mercury[1] = (this.lifeExp / .24).toFixed(2);
		if (this.mercury[1] < 0) {
  		this.mercury[2] = Math.abs(this.mercury[1]);
  	}
  	return this.mercury;life
  }

  venutianCalculator() {
  	this.venus[0] = (this.age / .62).toFixed(2);
  	this.venus[1] = (this.lifeExp / .62).toFixed(2);
  	if (this.venus[1] < 0) {
  		this.venus[2] = Math.abs(this.venus[1]);
  	}
  	return this.venus;
  }

  martianCalculator() {
  	this.mars[0] = (this.age / 1.88).toFixed(2);
  	this.mars[1] = (this.lifeExp / 1.88).toFixed(2);
  	if (this.mars[1] < 0) {
  		this.mars[2] = Math.abs(this.mars[1]);
  	}
  	return this.mars;
  } 

  jovianCalculator() {
  	this.jupiter[0] = (this.age / 11.86).toFixed(2);
  	this.jupiter[1] = (this.lifeExp / 11.86).toFixed(2);
  	if (this.jupiter[1] < 0) {
  		this.jupiter[2] = Math.abs(this.jupiter[1]);
  	}
  	return this.jupiter;
  } 

};