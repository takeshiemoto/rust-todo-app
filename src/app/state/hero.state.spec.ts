import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { HeroState } from './hero.state';
import { HeroAction } from './hero.actions';

describe('Hero actions', () => {
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([HeroState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    store.dispatch(new HeroAction('item-1'));
    store
      .select(state => state.hero.items)
      .subscribe((items: string[]) => {
        expect(items).toEqual(jasmine.objectContaining(['item-1']));
      });
  });
});
