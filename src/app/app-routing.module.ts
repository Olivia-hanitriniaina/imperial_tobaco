import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'fiches-client', loadChildren: './clients/fiches-client/fiches-client.module#FichesClientPageModule' },
  { path: 'new-client', loadChildren: './clients/new-client/new-client.module#NewClientPageModule' },
  { path: 'tournees', loadChildren: './tournees/tournees.module#TourneesPageModule' },
  { path: 'discussion', loadChildren: './discussion/discussion.module#DiscussionPageModule' },
  { path: 'detail-fiche-client', loadChildren: './clients/detail-fiche-client/detail-fiche-client.module#DetailFicheClientPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
