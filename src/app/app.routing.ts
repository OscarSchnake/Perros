import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CarComponent} from './car/car.component';
import {PersonComponent} from './person/person.component';

const appRoutes: Routes = [
    {path: 'persons', component: PersonComponent},
    {path: 'cars', component: CarComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);
