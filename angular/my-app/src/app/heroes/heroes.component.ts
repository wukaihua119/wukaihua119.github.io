import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero; // must be declared here.
  heroes1: Hero[];

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };


  heroes: Hero[] = [
    { id: 1, name: 'ABC' },
    { id: 2, name: 'abc' },
    { id: 3, name: 'Abc' },
    { id: 4, name: 'aBc' },
    { id: 5, name: 'abC' },
  ];

  constructor( private heroService: HeroService ) { }

  getHeroes(): void{
    // this.heroes1 = this.heroService.getHeroes(); // Without using the Observable<T> objects.
    this.heroService.getHeroes().subscribe( heroes1 => this.heroes1 = heroes1 );
  }

  ngOnInit(): void { // called and execute when this component is initializing.
    this.getHeroes();
  }

  onSelect( hero: Hero): void {
    this.selectedHero = hero;
  }


}
