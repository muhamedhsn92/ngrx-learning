import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgrxTableComponent } from './ngrx-table/ngrx-table.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './core/material-module/material.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ApiService } from './core/api/api.service';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx-table/counter.reducer';
import { ManageNgrxTableComponent } from './ngrx-table/manage-ngrx-table/manage-ngrx-table.component';
@NgModule({
  declarations: [
    AppComponent,
    NgrxTableComponent,
    ManageNgrxTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule, StoreModule.forRoot({ count: counterReducer,page:counterReducer })
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
