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
      question: "How wrote the poem 'Shanzenize'?",
      optionA: "I don't know",
      optionB: "Shakespeare",
      optionC: "Mike Tyson",
      optionD: "Lady Gaga",
      solution: "I don't know"
    },
    {
      question: "How many letters does the word 'apple' consist of?",
      optionA: "4",
      optionB: "5",
      optionC: "This should be in the Math section.",
      optionD: "3.14",
      solution: "This should be in the Math section."
    },
    {
      question: "How is the word 'dinner' spelled?",
      optionA: "D I N N E L",
      optionB: "D U N N E R",
      optionC: "D I N N E R",
      optionD: "I'm analphabetic.",
      solution: "D I N N E R"
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