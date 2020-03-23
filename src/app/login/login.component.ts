import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private readonly ngAuth: AngularFireAuth,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {}

  async loginWithGoogle() {
    const user = await this.ngAuth.auth.signInWithPopup(
      new auth.GoogleAuthProvider(),
    );
    if (user) {
      await this.router.navigateByUrl('/');
    }
  }
}
