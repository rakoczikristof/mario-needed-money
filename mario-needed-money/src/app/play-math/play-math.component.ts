import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SessionManagerService } from '../session-manager.service';

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
    {
      question: "First question?",
      optionA: "1976",
      optionB: "valami más",
      optionC: "harmadik",
      optionD: "negyedik",
      solution: "1976"
    },
    {
      question: "First question?",
      optionA: "1976",
      optionB: "valami más",
      optionC: "harmadik",
      optionD: "negyedik",
      solution: "1976"
    },
    {
      question: "First question?",
      optionA: "1976",
      optionB: "valami más",
      optionC: "harmadik",
      optionD: "negyedik",
      solution: "1976"
    }
   
  ];

  constructor( _router: Router, private sessionManager: SessionManagerService) {
    this.router = _router;
    this.coins = sessionManager.getCoins();
    sessionManager.setWorld("Math");
    sessionManager.setCurrentQuestionNumber(this.questionNumber+1);
    sessionManager.setMaxQuestionsNumber(this.questions.length);
  }

  ngOnInit() {
  }

  onSubmit(id: number) {
    var currentAnswer = this.answer;


    console.log("Radio gomb answer: " + currentAnswer);

    if(currentAnswer === this.questions[id].solution) {
        console.log("A megoldás jó.");

        this.coins = this.sessionManager.increaseCoins();

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
    this.sessionManager.setCurrentQuestionNumber(this.questionNumber+1);

    this.answer = "";
  }

}
