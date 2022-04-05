import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContattiComponent } from "./pages/contatti/contatti.component";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";
import { SigninComponent } from "./pages/signin/signin.component";

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
        path: 'contatti',
        component: ContattiComponent
    },
    {
        path: 'signin',
        component: SigninComponent
    },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }