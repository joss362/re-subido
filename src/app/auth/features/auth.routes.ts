import { Routes } from "@angular/router";

export default [
    {
        path:'Sign-in',
        loadComponent: () => import('./sign-in/sign-in.component'),
    },
    {
        path:'Sign-up',
        loadComponent:() => import('./sign-up/sign-up.component'),
    }
] as Routes