import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://gustavoantunes.com.br';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com/400/200/sports';
  valorAtual : string = '';
  valorSalvo : string = '';
  isMouseOver : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert("Botão Clicado!")
  }

  onKeyUp(event : KeyboardEvent) {

    this.valorAtual = (<HTMLInputElement>event.target).value;

  }

  salvarValor(valor : string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }
}
