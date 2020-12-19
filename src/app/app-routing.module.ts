import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StatesdataComponent } from './components/statesdata/statesdata.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'statesdata', component: StatesdataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
