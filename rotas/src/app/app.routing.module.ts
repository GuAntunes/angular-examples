import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
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
        canActivateChild: [CursosGuard],
        canLoad: [AuthGuard]
    },
    {
        path: 'cursos',
        loadChildren: () => import('./cursos/cursos.module').then(c => c.CursosModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
    },
    { path: 'login', component: LoginComponent },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PaginaNaoEncontradaComponent, canActivate: [AuthGuard] }
]

@NgModule({
    // imports: [RouterModule.forRoot(APP_ROUTES, {useHash: true})],
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}