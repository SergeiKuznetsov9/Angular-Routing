import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { PhrasesModule } from './phrases/phrases.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, PhrasesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
