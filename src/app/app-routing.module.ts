import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { TodoContainerComponent } from './container/todo-container/todo-container.component';
import { HeroContainerComponent } from './container/hero-container/hero-container.component';

const routes: Routes = [
  {
    path: 'counter-example',
    component: CounterComponent
  },
  {
    path: 'todo-example',
    component: TodoContainerComponent
  },
  {
    path: 'async-heroes-example',
    component: HeroContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
