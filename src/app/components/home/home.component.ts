import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {
  public title: string;
  public homeText = "Bienvenido al curso de Angular con Jorge Guiza de jorgeguizagranobles.com";
  public articles: Article[] | undefined;

  constructor(private _articleService: ArticleService) {
    this.title = 'ULTIMOS ARTICULOS';
  }

  ngOnInit(): void {
    this._articleService.getArticles(5).subscribe(
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
