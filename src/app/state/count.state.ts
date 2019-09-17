import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddCountAction, DecrementAction, IncrementAction } from './count.actions';

export class CountStateModel {
  public count: number;
}

@State<CountStateModel>({
  name: 'count',
  defaults: {
    count: 0
  }
})
export class CountState {
  @Selector()
  static count(state: CountStateModel) {
    return state.count;
  }

  @Action(IncrementAction)
  increment(ctx: StateContext<CountStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      count: state.count + 1
    });
  }

  @Action(DecrementAction)
  decrement(ctx: StateContext<CountStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      count: state.count - 1
    });
  }

  @Action(AddCountAction)
  addCount(ctx: StateContext<CountStateModel>, action: AddCountAction) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      count: state.count + action.count
    });
  }
}
