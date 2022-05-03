import {Component, OnInit} from '@angular/core';
import {IUser} from '../../models/IUser';
import {Router} from '@angular/router';
import {CognitoService} from '../../services/cognito.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loading: boolean;
  user: IUser;

  constructor(private router: Router,
              private cognitoService: CognitoService) {
    this.loading = false;
    this.user = {} as IUser;
  }

  ngOnInit(): void {
  }

  public signIn(): void {
    this.loading = true;
    this.cognitoService.signIn(this.user)
      .then(() => {
        this.router.navigate(['/home']);
      }).catch(() => {
      this.loading = false;
    });
  }

}
