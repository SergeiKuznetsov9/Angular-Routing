import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AminModule } from './amin/amin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { PhrasesModule } from './phrases/phrases.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, PhrasesModule, AminModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
