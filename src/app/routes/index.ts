import { Route } from '@angular/router';
import { DynamicComponentLoaderRoute } from './dynamic-component-loader';
import { HomeRoute } from './home';
import { Demos } from '../models/consts/demos';
import { ComponentNamePipe } from '../pipes';

export const RouteComponents = [
    DynamicComponentLoaderRoute,
    HomeRoute
];

export const Routes: Route[] = [
    ...Demos.map(x => { return { path: ComponentNamePipe.prototype.transform(x.name), component: x.component } }),
    { path: '', component: HomeRoute },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
