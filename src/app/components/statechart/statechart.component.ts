import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-statechart',
  templateUrl: './statechart.component.html',
  styleUrls: ['./statechart.component.scss']
})
export class StatechartComponent implements OnInit {

  stats: string = 'Current positive cases';

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: any[] = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData: any[] = [
    {data: [], label: 'positive cases'},
  ];

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChange) {
    console.log(this.data)
    this.data.map((x:any) => {
      this.barChartData[0].data.push(x.positive);
      this.barChartLabels.push(x.state)
    })
  }

  @Input() data: any;
}
