import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosDeactivateGuard } from './../guards/alunos.deactivate.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { AlunosGuard } from '../guards/alunos.guard';


const ALUNOS_ROUTES: Routes = [
    {
        path: '', component: AlunosComponent,
        canActivateChild: [AlunosGuard],
        children: [

            { path: 'novo', component: AlunoFormComponent },
            {
                path: ':id', component: AlunoDetalheComponent,
                resolve: { aluno: AlunoDetalheResolver}
            },
            {
                path: ':id/editar', component: AlunoFormComponent,
                canDeactivate: [AlunosDeactivateGuard]
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(ALUNOS_ROUTES)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {

}