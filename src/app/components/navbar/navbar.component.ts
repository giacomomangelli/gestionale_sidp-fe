import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private router: Router) {

  }

  onclick(): void {
    this.router.navigate(['/contatti']);

  }

  landing(): void {
    this.router.navigate(['/landing'])
  }

  signup(): void {
    this.router.navigate(['/signUp'])
  }

  signin(): void {
    this.router.navigate(['/signIn']);

  }

  ngOnInit(): void {
  }


}

