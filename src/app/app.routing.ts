import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PerroLocalComponent} from './perrolocal/perrolocal.component';
import {PerroComponent} from './perro/perro.component';

const appRoutes: Routes = [
    {path: 'perros', component: PerroComponent},
    {path: 'perroslocales', component: PerroLocalComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);
