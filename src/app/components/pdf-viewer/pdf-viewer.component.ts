import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged,filter, tap } from 'rxjs/operators'
@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss'],
})
export class PdfViewerComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute) {}
  pdfUri: string;
  ngOnInit(): void {
    this.activeRoute.params
    .pipe( 
      distinctUntilChanged(),
      filter((params:any) => params?.uri != null || params?.uri != undefined),
      tap(params => params?.uri)
      )
    .subscribe((uri:any) => this.pdfUri = uri);
  }
}
