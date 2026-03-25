import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './admins.component';
import { ListerFilmsComponent } from './lister-films/lister-films.component';
import { AjouterFilmComponent } from './ajouter-film/ajouter-film.component';

const routes: Routes = [{ path: '', component: AdminsComponent ,children: [
{path: 'liste-films', component: ListerFilmsComponent },
{path: 'add-film', component: AjouterFilmComponent},
] ,}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsRoutingModule { }
