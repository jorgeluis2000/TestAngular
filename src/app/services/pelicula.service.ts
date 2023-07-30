import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

/**
 *
 * This is a service class with a property Injectable.
 * @export PeliculaService all class PeliculaService is exported
 * @class PeliculaService
 */
@Injectable()
export class PeliculaService {
    /**
     *
     * This is the list of movies with this format: title, image and year.
     * @private this has properties private, no all could see every thing or management every thing into this variable
     * @type {Pelicula[]}
     * @memberof PeliculaService
     */
    private peliculas: Pelicula[];

    /**
     * Creates an instance of PeliculaService.
     * @memberof PeliculaService
     */
    constructor() {
        this.peliculas = [
            new Pelicula(
                'Spiderman 4',
                'https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/03/db9960b2dec9108169f86290953e15caef59dc62_s2_n1-scaled.jpeg?resize=1200%2C604&ssl=1',
                2019
            ),
            new Pelicula(
                'Los Vengadores: End-game',
                'https://media.revistagq.com/photos/5ca5f0b30a5ae628122a33e3/master/w_1600,c_limit/vengadores_4_8522.jpg',
                2015
            ),
            new Pelicula(
                'Venom',
                'https://imagenes.elpais.com/resizer/3GMLLOFQLnoioQr1X_y4rkKrktI=/1960x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/GNF5BL5KFJTZPGBE2RJTBZMFUQ.jpg',
                2017
            ),
            new Pelicula(
                'Venom 2',
                'https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/03/venom-scaled.jpeg?resize=1200%2C675&ssl=1',
                2020
            ),
        ];
    }

    /**
     * Return a string text saying 'Hola mundo, desde el servicio de angular!!!'
     *
     * @return {string} 
     * @memberof PeliculaService
     */
    holaMundo() {
        return 'Hola mundo, desde el servicio de angular!!!';
    }

    /**
     * Return the list of Peliculas.
     *
     * @return {Pelicula[]} 
     * @memberof PeliculaService
     */
    getPeliculas() {
        return this.peliculas;
    }

    /**
     * Change the list of movies to another list
     *
     * @param {Pelicula[]} nPeliculas
     * @memberof PeliculaService
     */
    setPeliculas(nPeliculas: Pelicula[]) {
        this.peliculas = nPeliculas;
    }
}
