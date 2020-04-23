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

  constructor() { }

  ngOnInit(): void {
  }

  getValor() {
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

}
