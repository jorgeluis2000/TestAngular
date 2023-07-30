// Import modules of route of Angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Import components whole to want to make a expclusive page
import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { PruebasComponent } from "./components/pruebas/pruebas.component";
import { ErrorComponent } from "./components/error/error.component";
import { ArticleComponent } from "./components/article/article.component";
import { SearchComponent } from "./components/search/search.component";
import { ArticleNewComponent } from "./components/article-new/article-new.component";
import { ArticleEditComponent } from "./components/article-edit/article-edit.component";
// Array or List of routes
const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog/article/:id', component: ArticleComponent },
    { path: 'blog/editar/:id', component: ArticleEditComponent },
    { path: 'blog/crear', component: ArticleNewComponent },
    { path: 'buscar/:search', component: SearchComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'pagina-de-pruebas', component: PruebasComponent },
    { path: 'pagina-de-pruebas/:nombre', component: PruebasComponent },
    { path: 'pagina-de-pruebas/:nombre/:apellido', component: PruebasComponent },
    { path: '**', component: ErrorComponent }
];


// Export module of routes
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);