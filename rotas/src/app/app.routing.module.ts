import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';

const APP_ROUTES: Routes = [
    {
        path: 'alunos',
        loadChildren: () => import('./alunos/alunos.module').then(a => a.AlunosModule),
        canActivate: [AuthGuard],
        canActivateChild: [CursosGuard]
    },
    {
        path: 'cursos',
        loadChildren: () => import('./cursos/cursos.module').then(c => c.CursosModule),
        canActivate: [AuthGuard]
    },
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}