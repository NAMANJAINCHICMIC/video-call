import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PARENT_PATHS } from './shared/constant-files/constant';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: PARENT_PATHS.DEFAULT, redirectTo: PARENT_PATHS.MAIN, pathMatch:'full' },
  { path: PARENT_PATHS.AUTH, canActivate: [AuthGuard], loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  /****
   * similarly you can add more routes as per you requirement
   */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
