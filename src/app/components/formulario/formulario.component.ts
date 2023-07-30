import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  public title: string;
  public user: any | undefined;
  constructor() {
    this.title = 'Formulario';
    this.user = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: ''
    };
  }

  ngOnInit(): void {}

  onSubmit() {
    //var element = document.getElementById('content') as HTMLElement;
    //element.innerHTML = "Hola como estan" + element.innerHTML;
    Swal.fire({
      title: 'Guardado!',
      html: `Excelente, El comentario de <b>${this.user['nombre']} ${this.user['nombre']}</b> ha sido guardado correctamente.`,
      icon: 'success',
      confirmButtonText: 'Ok'
    });
  }
}
