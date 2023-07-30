import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {

  public txtTitle!: string;
  public article!: Article;
  public status!: string;
  public is_edit!: boolean;
  public url!: string;

  public afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: 50,
    uploadAPI: {
      url: `${Global.url}upload-image`,
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    autoUpload: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen para el articulo',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) {
    this.is_edit = true;
    this.txtTitle = 'Crear articulo';
    this.url = Global.url;
    this.article = new Article('', '', '', '', null);
  }

  ngOnInit(): void {
    this.getArticle();
  }

  onSubmit() {
    this._articleService.update(this.article._id, this.article).subscribe(response => {
      if (response.status == true) {
        this.status = 'success';
        this.article = response.article;
        Swal.fire({
          title: 'Editado!',
          html: `Excelente, el articulo <b>${this.article['title']}</b> ha sido editado correctamente.`,
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        this._router.navigate(['/blog/article', this.article._id]);
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Las credenciales no son validas, lo sentimos, intentalos mas tarde.',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
        this.status = 'error';
      }
    },
      error => {
        Swal.fire({
          title: 'Error!',
          text: 'Las credenciales no son validas, lo sentimos, intentalos mas tarde.',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
        this.status = error;
      });
  }

  imageUpload(data:any) {
    let image_data = data['body']['image'];
    Swal.fire({
      title: 'Imagen cargada!',
      html: `Excelente, la imagen ha sido cargada correctamente.`,
      icon: 'success',
      confirmButtonText: 'Ok'
    });
    this.article.image = image_data;
  }

  getArticle() {
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

}
