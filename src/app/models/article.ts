/**
 * This a model to simulate a object Article in the problem world
 * @author Jorge Luis Guiza Granobles - Ingeniero de Sistemas
 * @export Article
 * @class Article
 */
export class Article {
    constructor(
        public _id: string,
        public title: string,
        public content: string,
        public image: string,
        public date: any
    ) {}
}