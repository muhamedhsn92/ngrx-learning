import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageNgrxTableComponent } from './ngrx-table/manage-ngrx-table/manage-ngrx-table.component';
import { NgrxTableComponent } from './ngrx-table/ngrx-table.component';


const routes: Routes = [
  { path: 'ngrx-table', component: NgrxTableComponent },
  { path: 'ngrx-table/manage-ngrx-table', component: ManageNgrxTableComponent },
  { path: 'ngrx-table/manage-ngrx-table/:id', component: ManageNgrxTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
