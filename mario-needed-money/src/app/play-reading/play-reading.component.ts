import { Component, OnInit } from '@angular/core';
import { SessionManagerService } from '../session-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play-reading',
  templateUrl: './play-reading.component.html',
  styleUrls: ['./play-reading.component.css']
})
export class PlayReadingComponent implements OnInit {

  questionNumber: number = 0;
  coins: number = 0;
  answer: string;
  router: Router;

  questions = [
    {
      question: "How much is 1+4?",
      optionA: "6",
      optionB: "4+1",
      optionC: "5.5",
      optionD: "4.9",
      solution: "4+1"
    },
    {
      question: "How many corners does a triangle have?",
      optionA: "none",
      optionB: "infinite",
      optionC: "lim(n+2)",
      optionD: "3",
      solution: "3"
    },
    {
      question: "How rich Mario will be in 10 years?",
      optionA: "a little",
      optionB: "very",
      optionC: "dead",
      optionD: "yes",
      solution: "dead"
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