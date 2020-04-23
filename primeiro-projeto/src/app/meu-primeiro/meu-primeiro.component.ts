import { Component } from '@angular/core';

@Component({
    // Indica qual será o nome utilizado para o component
    selector: 'meu-primeiro-component',
    // Define um template que será utilizado ao utilizar o component
    template: `
        <p>Meu Primeiro component com Angular 2</p>
    `
})
// O export permite que a classe seja exportada para ser vista por outros arquivos
export class MeuPrimeiroComponent { }