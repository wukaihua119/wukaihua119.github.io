import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() // in order to receive the data from Parent.
  hero: Hero;

  constructor() { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void{
  }

}
