import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { PlayMathComponent } from './play-math/play-math.component';
import { PlayComponent } from './play/play.component';
import { PlayReadingComponent } from './play-reading/play-reading.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'start', component: StartComponent },
  { path: 'play/math', component: PlayMathComponent },
  { path: 'play', component: PlayComponent },
  {path: 'play/reading', component: PlayReadingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
