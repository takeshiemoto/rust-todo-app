import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Hero } from './hero.actions';
import { IHero } from '../models/hero';
import { HeroService } from '../services/hero.service';
import { tap } from 'rxjs/operators';

export class HeroStateModel {
  public heroList: IHero[];
}

@State<HeroStateModel>({
  name: 'hero',
  defaults: {
    heroList: []
  }
})
export class HeroState {
  @Selector()
  static heroList(state: HeroStateModel) {
    return state.heroList;
  }

  constructor(private heroService: HeroService) {}
  @Action(Hero.GetList)
  getList(ctx: StateContext<HeroStateModel>) {
    const state = ctx.getState();
    return this.heroService.getList().pipe(
      tap(heroList =>
        ctx.setState({
          ...state,
          heroList
        })
      )
    );
  }
}
