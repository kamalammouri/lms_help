import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path:  ":lg/search",                 component:HomeComponent},
  { path:  ":lg/article/:id",                    component:ArticleDetailsComponent},
  { path:  "search",                        redirectTo:"fr/search", pathMatch: "full"},
  // { path:  "",                            redirectTo:"fr/article", pathMatch: "full"},
  { path:  "**",                            redirectTo:"fr/article", pathMatch: "full"},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

