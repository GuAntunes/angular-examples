import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    console.log(form);
    console.log(this.usuario);
  }

  consultaCEP(cep, form) {
    cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validacep.test(cep)) {

        this.resetaDadosForm(form);
        
        this.http.get(`https://viacep.com.br/ws/${cep}/json/`).subscribe((dados) => this.populaDadosForm(dados, form));
      }
    }
  }

  populaDadosForm(dados, form) {
    // form.setValue({
    //   "nome": form.value.nome,
    //   "email": form.value.email,
    //   "endereco": {
    //     "cep": dados.cep,
    //     "numero": "",
    //     "complemento": dados.complemento,
    //     "rua": dados.logradouro,
    //     "bairro": dados.bairro,
    //     "cidade": dados.localidade,
    //     "estado": dados.uf
    //   }
    // });

    form.form.patchValue({
      "endereco": {
        "cep": dados.cep,
        "complemento": dados.complemento,
        "rua": dados.logradouro,
        "bairro": dados.bairro,
        "cidade": dados.localidade,
        "estado": dados.uf
      }
    });
  }

  resetaDadosForm(form) {
    form.form.patchValue({
      "endereco": {
        "cep": null,
        "complemento": null,
        "rua": null,
        "bairro": null,
        "cidade": null,
        "estado": null
      }
    });
  }

}
