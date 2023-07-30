import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  @Input() pelicula: any | undefined;
  @Output() MarcarFavorito: any | undefined;

  constructor() {
    this.MarcarFavorito = new EventEmitter();
  }

  ngOnInit(): void {
  }

  seleccionar(event: any, movie: any) {
    this.MarcarFavorito.emit({
      pelicula: movie
    }); 
  }

}
