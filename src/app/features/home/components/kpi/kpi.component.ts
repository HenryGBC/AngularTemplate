import { Component, Input, OnInit } from '@angular/core';
import { IKpi } from 'src/app/core/models/users';

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.css'],
})
export class KpiComponent implements OnInit {
  @Input() kpi: IKpi;
  constructor() {}

  ngOnInit(): void {}
}
