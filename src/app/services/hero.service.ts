import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IHero } from '../models/hero';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() {}

  getList(): Observable<IHero[]> {
    return of([{ name: 'John' }, { name: 'Paul' }]).pipe(delay(700));
  }
}
