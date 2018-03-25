import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PerroLocalComponent} from './perrolocal/perrolocal.component';
import {PersonComponent} from './person/person.component';

const appRoutes: Routes = [
    {path: 'persons', component: PersonComponent},
    {path: 'perroslocales', component: PerroLocalComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);
