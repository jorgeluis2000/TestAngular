/**
 * This a model to simulate a object movie in the problem world
 * @author Jorge Luis Guiza Granobles - Ingeniero de Sistemas
 * @export Pelicula all class Pelicula is exported
 * @class Pelicula
 */
export class Pelicula {
    /**
      public title: string;
      public image: string;
      public year: number;
  
      constructor (nTitle:string, nImage:string, nYear: number) {
          this.title = nTitle;
          this.image = nImage;
          this.year = nYear;
      }
      */

    /**
     * Creates an instance of Pelicula.
     * @param {string} title
     * @param {string} image
     * @param {number} year
     * @memberof Pelicula
     */
    constructor(
        public title: string,
        public image: string,
        public year: number
    ) { }
}
