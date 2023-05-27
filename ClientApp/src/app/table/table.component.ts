import { ChangeDetectorRef, Component, Inject, Input, OnInit,OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableData } from '../table-data';
import { ThemeChanger } from '../app.module';
import { BehaviorSubject } from 'rxjs';
import { Subscription } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit,OnDestroy {
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
