import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppdetailsComponent } from './components/appdetails/appdetails.component';
import { FunctiondetailsComponent } from './components/functiondetails/functiondetails.component';
import { TriggerdetailsComponent } from './components/triggerdetails/triggerdetails.component';
import { FnlogsComponent } from './components/fnlogs/fnlogs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'app/:id', component: AppdetailsComponent },
  { path: 'function/:id', component: FunctiondetailsComponent },
  { path: 'trigger/:id', component: TriggerdetailsComponent },
  { path: 'logs/:id', component: FnlogsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
