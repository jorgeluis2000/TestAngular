import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public title: string;
  public article!: Article;
  public url: string;
  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router) {
    this.title = 'Blog';
    this.url = Global.url;
    this.article = new Article(' ','','','',null);
  }

  ngOnInit(): void {
    this._route.params.subscribe( params=> {
      let id = params['id'];
      this._articleService.getArticle(id).subscribe( response => {
        if(response.article) {
          this.article = response.article;
        } else {
          this._router.navigate(['/home']);
        }
      },
      error => {
        this._router.navigate(['/home']);
      });
    });
  }

  delete(id:any) {
    Swal.fire({
      title: 'Eliminar articulo',
      text: "No se podra recuperar los datos.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar articulo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._articleService.delete(id).subscribe( response => {
          Swal.fire(
            'Eliminado!',
            'El articulo ha sido borrado.',
            'success'
          );
          this._router.navigate(['/blog']);
        },
        error => {
          Swal.fire({
            title: 'Error!',
            text: 'Ha ocurrido algo, no se pudo eliminar el articulo.',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
          this._router.navigate(['/blog']);
        });
        
      }
    });
    
  }

}
