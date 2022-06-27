import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  data: any;
  perfil = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required])
  })

  constructor() { }

  ngOnInit(): void {}
    obter() {
      this.data = this.perfil.value;
    }

    get email() {
      return this.perfil.get('email');
    }

    get nome() {
      return this.perfil.get('nome');
    }

    get senha() {
      return this.perfil.get('senha');
    }

    submit(){
      console.log("Enviou formulário")
    }
    onSubmit(){
      console.log(this.data);
    }
}
