import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // {
  //   path: 'auth',
  //   loadChildren: () =>
  //     import('./auth/auth.module').then((m) => m.AuthModule)
  // },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then((m) => m.LoginPageModule)
  },
  {
    path: 'sucess',
    loadChildren: () => import('./pages/stripe/sucess/sucess.module').then( m => m.SucessPageModule)
  },
  {
    path: 'cancel',
    loadChildren: () => import('./pages/stripe/cancel/cancel.module').then( m => m.CancelPageModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
