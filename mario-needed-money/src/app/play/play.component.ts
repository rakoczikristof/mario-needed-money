import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/core/src/render3/util';
import { SessionManagerService } from '../session-manager.service';

@Component({
	selector: 'app-play',
	templateUrl: './play.component.html',
	styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

	playerName: string;
	coins: number;
	

	constructor(private sessionManager: SessionManagerService) {
		this.coins = sessionManager.getCoins();
		this.playerName = sessionManager.getName();
		sessionManager.resetGameInfo();
  	}

	ngOnInit() {
	}

	setUpName() {

	}

}
