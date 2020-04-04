import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ngModel lives here.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { PowerBoosterComponent } from './power-booster/power-booster.component';
import { ExponentialStrengthPipe } from './power-booster/ExponentialStrengthPipe';

@NgModule({
  declarations: [ // The components used in this NgModule.
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    PowerBoosterComponent,
    ExponentialStrengthPipe // This user-defined Pipe also needs to be involved here.
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // ngModel lives here.
  ],
  providers: [ HeroService ], // The Services that provide to NgModule
  bootstrap: [AppComponent]
})
export class AppModule { }
