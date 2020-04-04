import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
// import { HEROES } from './mock-heroes';

@Injectable({ // be injected to somewhere.
  providedIn: 'root'
})
export class HeroService {

  heroes: Hero[];

  constructor() { }

  getHeroes(): Observable<Hero[]>{
    // return of( HEROES );
    return null;
  }
}
