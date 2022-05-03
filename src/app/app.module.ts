import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';


import {AppComponent} from './app.component';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {ContattiComponent} from './pages/contatti/contatti.component';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {ComponentsModule} from './components/components.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './pages/home/home.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import {SignInComponent} from './pages/sign-in/sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ContattiComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
