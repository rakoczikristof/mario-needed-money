import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './material';
import { StartComponent } from './start/start.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PlayMathComponent } from './play-math/play-math.component';
import { PlayComponent } from './play/play.component';
import { PlayerInfoComponent } from './player-info/player-info.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    NavComponent,
    HomeComponent,
    PlayMathComponent,
    PlayComponent,
    PlayerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
