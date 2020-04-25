import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit {

  @Input() valorInicial : number = 10;

  constructor() { 
    this.log('constructor');
  }

  // Quando o componente é inicializado
  ngOnInit(): void {
    this.log('ngOnInit')
  }

  // quando o valor property-binding é atualizado
  ngOnChanges(){
    this.log('ngOnChanges');
  }

  // a cada ciclo de verificação de mudanças
  ngDoCheck() {
    this.log('ngDoCheck');
  }

  // depois de inserir conteúdo externo na view
  ngAfterContentInit(){
    this.log('ngAfterContentInit');
  }

  // a cada verificação de conteúdo inserido
  ngAfterContentChecked(){
    this.log('ngAfterContentChecked');
  }

  // a cada verificação de conteúdo / conteúdo filho
  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  // antes da diretiva/component ser destruído
  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook: string){
    console.log(hook);
  }
}
