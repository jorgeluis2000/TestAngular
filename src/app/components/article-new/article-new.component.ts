import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public url!: string;
  public txtTitle!: string;
  public article!: Article;
  public status!: string;
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
    this.txtTitle = 'Crear articulo';
    this.url = Global.url;
    this.article = new Article('', '', '', '', null);
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this._articleService.create(this.article).subscribe(response => {
      if (response.status == true) {
        this.status = 'success';
        this.article = response.article;
        // Alert
        Swal.fire({
          title: 'Guardado!',
          html: `Excelente, el articulo <b>${this.article['title']}</b> ha sido guardado correctamente.`,
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        // Redireccion
        this._router.navigate(['/blog']);
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Las credenciales no son validas, lo sentimos, intenta mas tarde.',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
        this.status = 'error';
      }
    },
      error => {
        Swal.fire({
          title: 'Error!',
          text: 'Las credenciales no son validas, lo sentimos, intenta mas tarde.',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
        this.status = error;
      });
  }

  imageUpload(data:any) {
    let image_data = data['body']['image'];
    this.article.image = image_data;
  }


}
