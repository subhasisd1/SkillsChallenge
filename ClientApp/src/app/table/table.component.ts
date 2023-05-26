import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableData } from '../table-data';
import { ThemeChanger } from '../app.module';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() columns: TableData[] = [];
  @Input() rows: { [key: string]: any }[] = [];

  color: string = '';

  constructor(@Inject(ThemeChanger) private themeChanger: BehaviorSubject<string>, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.themeChanger.subscribe(val => {
      this.color = val;
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {

  }

}
