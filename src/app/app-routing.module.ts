import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ContattiComponent} from "./pages/contatti/contatti.component";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {LoginComponent} from "./pages/login/login.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {HomeComponent} from "./pages/home/home.component";
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingPageComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contatti',
    component: ContattiComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path: 'signIn',
    component: SignInComponent
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
