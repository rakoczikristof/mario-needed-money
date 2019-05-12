import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionManagerService {

  constructor() { }

  setName(name:string) {
    localStorage.setItem("name", JSON.stringify(name));
  }

  getName() {
    return JSON.parse(localStorage.getItem("name"));
  }

  getCoins() {
    var coins:number = JSON.parse(localStorage.getItem("coins"));

    return coins;
  }

  increaseCoins() {
    var coins: number = this.getCoins() + 10;

    localStorage.setItem("coins", JSON.stringify(coins));
    return coins;
  }

  setWorld(world:string) {
    localStorage.setItem("world", JSON.stringify(world));
  }

  getWorld() {
    var world: string = JSON.parse(localStorage.getItem("world"));

    if(world === null) {
      return "NONE";
    }

    return world;
  }

  getCurrentQuestionNumber() {
   return JSON.parse(localStorage.getItem("current-question-number"));
  }

  getMaxQuestionsNumber() {
    return JSON.parse(localStorage.getItem("max-question-number"));
  }

  setCurrentQuestionNumber(num: number) {
    localStorage.setItem("current-question-number", JSON.stringify(num));
  }
  setMaxQuestionsNumber(num: number) {
    localStorage.setItem("max-question-number", JSON.stringify(num));
  }

  getQuestionInfo() {
    var result = "";

    if(this.getCurrentQuestionNumber() == null) {
      return "";
    }
    result = result.concat("| ", this.getCurrentQuestionNumber(), "/", this.getMaxQuestionsNumber());


    return result;
    // return this.getCurrentQuestionNumber + "/"+this.getMaxQuestionsNumber();
  }

  resetGameInfo() {
    this.setWorld(null);
    this.setCurrentQuestionNumber(null);
    this.setMaxQuestionsNumber(null);
  }

}
