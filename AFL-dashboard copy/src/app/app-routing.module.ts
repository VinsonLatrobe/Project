import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamDetailComponent } from './teams/team-detail/team-detail.component';

const routes: Routes = [
  { path: 'team-detail/:id', component: TeamDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
