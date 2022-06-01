import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ArticleDetailsComponent } from './components/article-details/article-details.component'
import { HomeComponent } from './components/home/home.component'
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component'

export const routes: Routes = [
  { path: ':lg/search', component: HomeComponent },
  { path: ':lg/article', component: ArticleDetailsComponent },
  { path: ':lg/article/:id', component: ArticleDetailsComponent },
  { path: ':lg/article/:id/pdf/:uri', component: PdfViewerComponent },
  { path: 'search', redirectTo: 'fr/search', pathMatch: 'full' },
  { path: '**', redirectTo: 'fr/article', pathMatch: 'full' },
  // { path:  ":lg",                     redirectTo:"de/article", pathMatch: "full"},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
