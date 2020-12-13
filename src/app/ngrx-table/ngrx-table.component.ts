import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../core/api/api.service';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './counter.actions';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-ngrx-table',
  templateUrl: './ngrx-table.component.html',
  styleUrls: ['./ngrx-table.component.scss']
})
export class NgrxTableComponent implements OnInit {
  count$: Observable<number>
  controller = {
    clinic_service: 'clinic-service/',
    gl_currency: 'currency-controller/',
    inv_colors: 'inv-colors/',
    inv_measure: 'inv-measure-master/'
  }
  page$: Observable<number>; size = 10; totalSize; pageX = 0;
  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  displayedColumns = ["index", "column_a", "column_b", "column_c",];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private api: ApiService,
    @Inject(DOCUMENT) private document: Document,
    private elementRef: ElementRef,
    private store: Store<{ count: number }>,
    private pageStore: Store<{ page: number }>,
  ) {
    new MatTableDataSource([]);
    this.dataSource.paginator = this.paginator;
    this.count$ = store.select('count');
    // this.page$ = pageStore.select('page');
    this.page$ = pageStore.select('page');

  }

  ngOnInit(): void {
    this.count$.subscribe((data: any) => {
      console.log('data', data);
      this.pageX = data;
      this.paginator.pageIndex = data;
    })
    this.list();

  }
  list() {
    this.api.list(this.controller.inv_measure, this.pageX, this.size).subscribe((data: any) => {
      console.log('datasource', data);
      this.dataSource.data = data.resultData.resultData;
      this.totalSize = data.resultData.totalItemsCount;
      // this.dataSource.paginator = this.paginator
    })

  }
  onPageChange(e) {
    this.size = e.pageSize;
    this.pageX = e.pageIndex;
    if (e.pageIndex > e.previousPageIndex) {
      this.store.dispatch(increment());
      this.pageStore.dispatch(increment());
    } else {
      this.store.dispatch(decrement());
      this.pageStore.dispatch(decrement());
    }
    this.list();
  }


  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
}
