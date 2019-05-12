import { Component, OnInit } from '@angular/core';
import { SessionManagerService } from '../session-manager.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {

  constructor(sessionManager: SessionManagerService) { }

  ngOnInit() {
  }

}
