import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // http://localhost/
  { path: 'dashboard', component: DashboardComponent }, // http://localhost/dashboard
  { path: 'hero', component: HeroesComponent }, // http://localhost/hero
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // setting the routes map to Rout
  exports: [RouterModule] // then make it avaliabe external.
})
export class AppRoutingModule { }
