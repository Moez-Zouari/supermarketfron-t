import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'articles/home',
    pathMatch: 'full',
  },
  {
    path: 'categories',
    redirectTo: 'categories/home',
  },
  {
    path: '',
    redirectTo: 'commande/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
