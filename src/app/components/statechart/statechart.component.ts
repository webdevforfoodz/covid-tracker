import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { ChartType } from 'chart.js'

@Component({
  selector: 'app-statechart',
  templateUrl: './statechart.component.html',
  styleUrls: ['./statechart.component.scss']
})
export class StatechartComponent implements OnInit {

  stats: string = 'Total confirmed cases';

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      display: false
    },
    maintainAspectRatio: false
  };
  public barChartLabels: any[] = [];
  public barChartType: ChartType = "horizontalBar";
  public barChartLegend = true;
  public barChartData: any[] = [
    {data: [],barThickness: 8},
  ];

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChange) {
    this.data.map((x:any) => {
      this.barChartData[0].data.push(x.positive);
      this.barChartLabels.push(x.state)
    })
  }

  changeOption($event: any) {
    this.barChartData[0].data = [];
    this.barChartLabels = [];

    this.data.map((x:any) => {
      
      let option = $event
      switch(option) {
        case "confirmed":
          this.barChartData[0].data.push(x.positive);
          break;
        case "recovered":
          this.barChartData[0].data.push(x.recovered);
          break;
        case "deaths":
          this.barChartData[0].data.push(x.death);
          break;
        case "hospitalized":
          this.barChartData[0].data.push(x.hospitalized);
          break;
      }
      this.barChartLabels.push(x.state)
    })
  }

  @Input() data: any;
}
