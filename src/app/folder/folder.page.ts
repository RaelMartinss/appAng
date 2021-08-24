import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');




    const form = document.querySelector('#form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      

      const pesoInicial = (<HTMLInputElement>document.getElementById('pesoInicial')).value;
      const pesoFinal = (<HTMLInputElement>document.getElementById('pesoFinal')).value;

      
    

      const pesoI = Number(pesoInicial);
      const pesoF = Number(pesoFinal);

      const msg = quebra(pesoI, pesoF);
      const res = resultado(pesoI);

      const ress = resultado2(pesoF);

      const str = `Peso1: ${res} <br/>Peso2: ${ress}<br/> Quebra: ${msg.toFixed(2)}`;
      // setResultado(msg, true);
      setResultado2(str, true);
      //    let cont = 0;

      //  const amazenar = [];
      //  amazenar.push(msg)
      //  setResultado(amazenar, true);
      // const lim = (<HTMLInputElement>document.getElementById('btn'));
      // limpa(lim);
     
    });
    function limpa(){


      // if ((<HTMLInputElement>document.getElementById('pesoFinal')).value != ''){ 
      //   (<HTMLInputElement>document.getElementById('pesoFinal')).value = ""; 
      // }
      var resetForm: HTMLFormElement;
      resetForm = <HTMLFormElement>document.getElementById('pesoFinal');
      if(resetForm)
        resetForm.reset();
    }
    limpa();

    function quebra(peso1, peso2) {

      const pesoInicial = peso1 - 105;
      const pesoFinal = peso2 - 105;
      const resultado = ((pesoFinal / pesoInicial) * 100) - 100;

      return resultado;
    }

    function resultado(res) {
      const p01 = res;
      return p01;
    }
    function resultado2(ress) {
      const p02 = ress;
      return p02;
    }

    function criarP() {
      const p = document.createElement('p');
      return p;
    }

    function setResultado(msg, isValid) {
      const calculo = document.querySelector('#calculo');
      calculo.innerHTML += '';

      const p = criarP();

      if (isValid) {
        p.classList.add('paragrafo-resultado');
      }

      p.innerHTML = msg;
      calculo.appendChild(p);
    }
    function setResultado2(msgp, isValid) {
      const resultado = document.querySelector('#resu');
      resultado.innerHTML += '';

      const p = criarP();

      if (isValid) {
        p.classList.add('paragrafo-resultado');
      }

      p.innerHTML = msgp;
      resultado.appendChild(p);
    }

  }
}