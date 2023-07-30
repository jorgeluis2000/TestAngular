import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {
  public title: string;
  public nombre: string;
  public apellido: string;
  constructor(private _route: ActivatedRoute, private _router: Router) {
    this.title = 'Pagina de pruebas';
    this.nombre = '';
    this.apellido = '';
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.nombre = params['nombre'];
      this.apellido = params['apellido'];
    });
  }

  redireccion() {
    this._router.navigate(['/pagina-de-pruebas', "Jorge Luis #12", " Guiza Granobles"]);
  }

}
