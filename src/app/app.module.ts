import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {ComponentsModule} from "./components/components.module";
import {ContattiComponent} from './pages/contatti/contatti.component';
import {SigninComponent} from './pages/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ContattiComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
