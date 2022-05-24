import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneraleService {

  changeLanguage = new BehaviorSubject<string>('fr');
  constructor() { }
}
