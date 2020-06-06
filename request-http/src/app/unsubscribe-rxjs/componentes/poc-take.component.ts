import { Component, OnInit, OnDestroy } from '@angular/core';
import { EnviarValorService } from '../enviar-valor.service';
import { tap, take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

//A melhor forma caso depois da requisição não necessite manter o objeto subscrito
//Se encaixa na maioria dos casos
@Component({
  selector: 'app-poc-take',
  template: `
    <app-poc-base [nome]="nome"
      [valor]="valor" estilo="bg-info">
    </app-poc-base>
  `
})
export class PocTakeComponent implements OnInit, OnDestroy {

  nome = 'Componente com take';
  valor: string;

  constructor(private service: EnviarValorService) {}

  ngOnInit() {
    this.service.getValor()
    .pipe(tap(v => console.log(this.nome, v)),
    take(1))
    .subscribe(novoValor => this.valor = novoValor);
  }

  ngOnDestroy(): void {
    console.log(`${this.nome} componente foi destruído`);
  }
}
