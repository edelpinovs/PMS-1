import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component' ;
import { Routes } from '@angular/router';

// App routes
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent, data: { name: 'Home' } },
  { path: '**', component: NotFoundComponent },
];
