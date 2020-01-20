import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IHero } from '../../models/hero';
import { HeroState } from '../../state/hero.state';
import { Hero } from '../../state/hero.actions';

@Component({
  selector: 'app-hero-container',
  templateUrl: './hero-container.component.html',
  styleUrls: ['./hero-container.component.scss']
})
export class HeroContainerComponent implements OnInit {
  /* @Selectデコレータによる取得(監視) */
  @Select(HeroState.heroList) heroList$: Observable<IHero[]>;
  constructor(private store: Store) {}
  ngOnInit() {
    this.store.dispatch(new Hero.GetList());
  }
}
