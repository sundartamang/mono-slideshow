import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components').then(m => m.HomeComponent)
    },
    {path:'**', redirectTo: 'full'}
];
