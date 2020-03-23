import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AngularFireAuthGuard,
  loggedIn,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

const loggedOnly = () => loggedIn;
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: 'app',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    loadChildren: () =>
      import('./app/app.module').then((module) => module.AppModule),
  },
  {
    path: 'login',
    // TODO inspect logic here
    loadChildren: () =>
      import('./login/login.module').then((module) => module.LoginModule),
  },
  {
    path: '**',
    redirectTo: 'app',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
