import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { NoPageComponent } from './components/no-page/no-page.component';
import { ChildAComponent } from './components/first/child-a/child-a.component';
import { ChildBComponent } from './components/first/child-b/child-b.component';
import { SecondaryRoutComponent } from './components/secondary-rout/secondary-rout.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    NoPageComponent,
    ChildAComponent,
    ChildBComponent,
    SecondaryRoutComponent
  ],
  imports: [
    BrowserModule,

    // Сюда нужно добавлять модуль маршрутизации
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
