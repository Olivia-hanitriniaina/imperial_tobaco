import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'fiches-client', loadChildren: './clients/fiches-client/fiches-client.module#FichesClientPageModule' },
  { path: 'new-client', loadChildren: './clients/new-client/new-client.module#NewClientPageModule' },
  { path: 'discussion', loadChildren: './discussion/discussion.module#DiscussionPageModule' },
  { path: 'detail-fiche-client', loadChildren: './clients/detail-fiche-client/detail-fiche-client.module#DetailFicheClientPageModule' },
  { path: 'liste-tournee', loadChildren: './tournees/liste-tournee/liste-tournee.module#ListeTourneePageModule' },
  { path: 'detail-tournee', loadChildren: './tournees/detail-tournee/detail-tournee.module#DetailTourneePageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
