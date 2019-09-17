import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { CountState } from '../state/count.state';
import { Observable } from 'rxjs';
import { CounterFacadeService } from '../services/facades/counter-facade.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  @Select(CountState.count) count$: Observable<number>;
  constructor(public counter: CounterFacadeService) {}
}
