import { ConsultaCepService } from './../shared/services/consulta-cep.service';
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

  constructor(private http: HttpClient,
    private cepService: ConsultaCepService) { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    this.http.post('enderecoServer/formUsuario', JSON.stringify((form.value)))
      .subscribe(dados => console.log(dados));
  }

  consultaCEP(cep, form) {
    cep = cep.replace(/\D/g, '');

    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
      .subscribe((dados) => this.populaDadosForm(dados, form));
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
