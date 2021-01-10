import { AfterViewInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from 'src/app/types';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnChanges, AfterViewInit {
  @Input() clients: Client[];
  displayedColumns: string[] = ['photo', 'name', 'surname', 'age', 'phone'];
  dataSource: MatTableDataSource<Client>;

  // @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor() { 
  }

  ngOnChanges() {
    console.log('-----', this.clients);
    this.dataSource = new MatTableDataSource(this.clients);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    // достаем значение переменной для фильтрации из пришедшего события
    const filterValue = (event.target as HTMLInputElement).value;

    // устанавливаем значение переменной для фильтрации и обрезаем пробелы
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // обновляем первую страницу пагинации
    if (this.dataSource?.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}