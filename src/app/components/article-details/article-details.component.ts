import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { tap } from 'rxjs/operators'
import { GeneraleService } from 'src/app/services/generale.service'
@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
})
export class ArticleDetailsComponent implements OnInit {
  routeParams: any
  langs = ['en', 'de', 'fr']
  articles: any = [
    {
      type: 'description',
      id: 1,
      title: 'Article 1',
      description:
        "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
    },
    {
      type: 'video',
      id: 2,
      title: 'Video 1',
      src: '../../../assets/video.mp4',
    },
  ]
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private generaleService: GeneraleService,
  ) {
    this.activeRoute.params.pipe(
      // tap((res:any) => { 
      //   if(Object.keys(res).length<=1){
      //     res.lg && this.langs.includes(res.lg)?this.router.navigateByUrl('/'+res.lg+'/article/2'):this.router.navigateByUrl('/fr/article/2')
      //   }
      // })
    ).subscribe((params) => {
      this.routeParams = params
    })
  }

  ngOnInit(): void {
    // console.log('routeParams',this.routeParams.getValue().id);
  }
}
