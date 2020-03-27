import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  pessoas = [
    { nome: 'Manoel Pinheiro' , cidade: 'Uberlândia', estado: 'MG',
      status: true},
    { nome: 'Sebastião da Silva' , cidade: 'São Paulo', estado: 'SP',
    status: false},
    { nome: 'Carla Souza' , cidade: 'Florianópolis', estado: 'SC',
    status: true}
  ];

}
