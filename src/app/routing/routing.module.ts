import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {UsernameComponent} from '../username/username.component';
import {RepositoriesComponent} from '../repositories/repositories.component';

const routes: Routes = [
  {path: 'username', component: UsernameComponent },
  {path: 'repositories', component: RepositoriesComponent},
  {path: '', redirectTo: 'username', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
