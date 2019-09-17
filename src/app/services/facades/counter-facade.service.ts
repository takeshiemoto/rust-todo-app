import { Injectable } from '@angular/core';
import { AddCountAction, DecrementAction, IncrementAction } from '../../state/count.actions';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class CounterFacadeService {
  constructor(private store: Store) {}

  public increment(): void {
    this.store.dispatch(new IncrementAction());
  }

  public decrement(): void {
    this.store.dispatch(new DecrementAction());
  }

  public add(count: string): void {
    const addCount = Number(count);
    this.store.dispatch(new AddCountAction(addCount));
  }
}
