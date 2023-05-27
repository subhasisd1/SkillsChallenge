import { ChangeDetectorRef, Component, OnInit,OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../table/table.component';
import { PeopleService } from './people.service';
import { TableData } from '../table-data';
import { QuickSearchDirective } from '../quick-search.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [CommonModule, TableComponent, QuickSearchDirective],
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit,OnDestroy {
  isLoading = true;
  rows!: { [key: string]: any }[];
  readonly columns: TableData[] = [
    {
      Header: 'First Name',
      PropName: 'firstName'
    },
    {
      Header: 'Last Name',
      PropName: 'lastName'
    },
    {
      Header: 'Birthday',
      PropName: 'birthday'
    }
  ];
  subs: Subscription = new Subscription;


  constructor(private service: PeopleService, private cd: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.search();
  }

  search(filter = '') {
 this.subs =  this.service.fetch(filter).subscribe(value => {
      this.rows = value;
      this.isLoading = false;
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
