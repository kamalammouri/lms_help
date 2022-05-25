import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path:  "search/:lg/:params",                 component:HomeComponent},
  { path:  "article/:lg/:id",                    component:ArticleDetailsComponent},
  { path:  "search",                        redirectTo:"/search/fr/params?value=", pathMatch: "full"},
  { path:  "**",                            redirectTo:"/article/fr/1", pathMatch: "full"},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

