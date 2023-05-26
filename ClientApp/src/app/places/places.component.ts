import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../table/table.component';
import { PlacesService } from './places.service';
import { TableData } from '../table-data';
import { QuickSearchDirective } from '../quick-search.directive';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [CommonModule, TableComponent, QuickSearchDirective],
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit,OnDestroy {
  isLoading = true;
  rows!: { [key: string]: any }[];
  readonly columns: TableData[] = [
    {
      Header: 'Name',
      PropName: 'name'
    },
    {
      Header: 'Address',
      PropName: 'displayAddress'
    }
  ];

  subscription: Subscription = new Subscription;

  constructor(private service: PlacesService, private cd: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.search();
  }

  search(filter = '') {
    this.subscription =this.service.fetch(filter).subscribe(value => {
      this.rows = value;
      this.isLoading = false;
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
