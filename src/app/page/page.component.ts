import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { cflat } from '../model/flat.model';
import { FlatService } from '../service/flat.service';

export interface UserData {
  userId: number;
  ownerName: string;
  flatNo: string;
  floorNo: string;
  flatType: string;

}

/** Constants used to fill up our data base. */


/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'table-overview-example',
  styleUrls: ['./page.component.css'],
  templateUrl: './page.component.html',
})
export class PageComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'ownerName', 'flatNo', 'floorNo', 'flatType'];
  dataSource: MatTableDataSource<cflat[]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private flat: cflat;
  private newpage:cflat;
  constructor(private flatService: FlatService) {
    // Create 100 users
    this.getPageFlats(this.newpage);
    this.flatService.getPageFlats(this.newpage).subscribe(flatdata => this.flat = flatdata)


    // Assign the data to the data source for the table to render
  }

  ngOnInit()
  {
   /*  this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort; */
  }

  getPageFlats(newpage) 
  {
    console.log("***getPageFlats***");
    this.flatService.getPageFlats(newpage).subscribe(flat =>  this.flat = flat)

  }



}