import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-math',
  templateUrl: './play-math.component.html',
  styleUrls: ['./play-math.component.css']
})
export class PlayMathComponent implements OnInit {

  coins: number = 10;

  constructor() {
      
  }

  ngOnInit() {
    this.coins = JSON.parse(localStorage.getItem("coins"));
  }

}
