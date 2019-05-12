import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-play-math',
  templateUrl: './play-math.component.html',
  styleUrls: ['./play-math.component.css']
 
})




export class PlayMathComponent implements OnInit {

  questionNumber: number = 0;
  coins: number = 0;
  answer: string;
  router: Router;

  questions = [
    { question: "First question?", first: "1976", second: "valami más", solution: "1976" },
    { question: "First question?", first: "1976", second: "valami más", solution: "1976" },
    { question: "First question?", first: "1976", second: "valami más", solution: "1976" }
  ];

  constructor( _router: Router) {
    this.router = _router;
    this.coins = JSON.parse(localStorage.getItem("coins"));
  }

  ngOnInit() {
  }

  onSubmit(id: number) {
    var currentAnswer = this.answer;


    console.log("Radio gomb answer: " + currentAnswer);

    if(currentAnswer === this.questions[id].solution) {
        console.log("A megoldás jó.");
        this.coins = JSON.parse(localStorage.getItem("coins")) + 10;
        
        localStorage.setItem("coins", JSON.stringify(this.coins));
        console.log("Coins: " + this.coins);

    } else if(currentAnswer === undefined) {
      return;
    } else {
      console.log("A megoldás rossz. Megoldás: " + this.questions[id].solution
                  +" Kapott válasz: " + currentAnswer);
    }

    if(this.questionNumber == this.questions.length-1) {
      console.log("Nincs több feladat.");
      this.router.navigateByUrl('play');
      return;
    }
   
    

    this.questionNumber++;
    
    this.answer = "";
  }

}
