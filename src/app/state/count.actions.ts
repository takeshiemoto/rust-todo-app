export class IncrementAction {
  static readonly type = '[Count] Increment';
}

export class DecrementAction {
  static readonly type = '[Count] Decrement';
}

export class AddCountAction {
  static readonly type = '[Count] AddCount';
  constructor(public count: number) {}
}
