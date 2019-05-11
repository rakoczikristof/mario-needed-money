import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/core/src/render3/util';

@Component({
	selector: 'app-play',
	templateUrl: './play.component.html',
	styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

	  playerName: string;

	

	constructor() {
		this.playerName = JSON.parse(localStorage.getItem("name"));
		console.log("Player's name: %s", this.playerName);
		
		localStorage.setItem("coins", JSON.stringify(15));
  	}

	ngOnInit() {
	}

	setUpName() {

	}

}
