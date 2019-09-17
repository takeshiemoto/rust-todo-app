import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { CountState } from '../state/count.state';
import { Observable } from 'rxjs';
import { AddCountAction, DecrementAction, IncrementAction } from '../state/count.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Select(CountState.count) count$: Observable<number>;

  public count: number = 1;

  constructor(private store: Store) {}

  ngOnInit() {}

  public increment(): void {
    this.store.dispatch(new IncrementAction());
  }

  public decrement(): void {
    this.store.dispatch(new DecrementAction());
  }

  public add(): void {
    const addCount = Number(this.count);
    this.store.dispatch(new AddCountAction(Number(addCount)));
  }
}
