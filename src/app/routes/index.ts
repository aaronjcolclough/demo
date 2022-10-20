import { Route } from '@angular/router';
import { HomeRoute } from './home';

export const RouteComponents = [
  HomeRoute
]

export const Routes: Route[] = [
  { path: '', component: HomeRoute },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]
