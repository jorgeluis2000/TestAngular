import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  public title: string;
  public articles: Article[] | undefined;

  constructor(
    private _articleService: ArticleService
  ) {
    this.title = 'Blog';
  }

  ngOnInit(): void {
    //console.log(this._articleService.pruebas());
    this._articleService.getArticles().subscribe(
      response => {
        if (response.articles) {
          this.articles = response.articles;
        }
      },
      error => {
        this.articles = [];
      }
    );
  }

}
