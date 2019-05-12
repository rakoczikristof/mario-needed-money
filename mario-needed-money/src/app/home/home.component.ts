import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  router: Router;
  constructor(private _router: Router) { 
    this.router = _router;
  }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
    
		this.router.navigateByUrl('/start');
  }

}
