import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const CURSOS_ROUTES: Routes = [
    //Para utilizar o lazy loading devemos remover a declaração da rota cursos nesta linha e deixar '',
    //pois já foi declarada no arquivo app.routing
    { path: '', component: CursosComponent},
    { path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
    { path: ':id', component: CursoDetalheComponent},
]

@NgModule({
    imports: [RouterModule.forChild(CURSOS_ROUTES)],
    exports: [RouterModule]
})
export class CursosRoutingModule {

}