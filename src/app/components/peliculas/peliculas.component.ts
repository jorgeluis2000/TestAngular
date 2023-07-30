import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public title = 'Peliculas';
  public titulo: string;
  public peliculas: Pelicula[];
  public favorita: Pelicula | undefined;

  constructor(private _peliculaService: PeliculaService) {
    this.titulo = 'Component movies';
    this.peliculas = [];
    this.peliculas = _peliculaService.getPeliculas();
  }
  ngOnDestroy(): void { }

  ngDoCheck(): void { }

  ngOnInit(): void {
    //console.log(this._peliculaService.holaMundo);
  }

  cambiarTitulo() {
    this.titulo = 'El titulo ha sido cambiado';
  }

  mostrarFavorito(event: any) {
    this.favorita = event.pelicula;
    Swal.fire({
      title: 'Pelicula Favorita!',
      html: `Excelente, La pelicula <b>${this.favorita?.title}</b> es tu pelicula favorita.`,
      icon: 'success',
      confirmButtonText: 'Ok'
    });
  }
}
