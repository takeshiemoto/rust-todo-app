import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { CountState } from './state/count.state';
import { CounterComponent } from './counter/counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoContainerComponent } from './container/todo-container/todo-container.component';
import { TodoState } from './state/todo.state';
import { HeroContainerComponent } from './container/hero-container/hero-container.component';
import { HeroState } from './state/hero.state';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TodoContainerComponent,
    HeroContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([CountState, TodoState, HeroState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
