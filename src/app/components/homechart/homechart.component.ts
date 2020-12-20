import { Component, OnInit, Input, SimpleChange, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-homechart',
  templateUrl: './homechart.component.html',
  styleUrls: ['./homechart.component.scss']
})
export class HomechartComponent implements OnInit {

  loading: boolean = false;
  option: string = 'confirmed';


  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;

  lineChartData: any[] = [
    { data: []},
  ];

  lineChartLabels: any[] = [];

  lineChartOptions = {
    responsive: true,
    elements: {
      point: {
        radius: 0
      },
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Amount of cases',
        },
        ticks: {
          callback: function(value: any) {
            return value !== null ? value.toLocaleString() : 0;
          }
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Date',
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit:10,
          reverse: true,
        }
      }]
    },
    animation: {
      duration: 2000
    },
    title: {
      display: true,
      text: 'Number of cases in 2020'
    }
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#859bff',
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType: ChartType = 'line';

  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChange) {
    // console.log(changes)
    this.initChart('confirmed');
  }

  initChart(option: string) {
    this.lineChartData[0].data = [];
    this.lineChartLabels = [];
    
    this.historicalData.forEach((data:any) => {
      switch(option) {
        case 'confirmed':
          this.lineChartData[0].data.push(
            data.positive
          );
          this.lineChartLabels.push(
            data.dateChecked.slice(5,10)
          );
          break;
        case 'recovered':
          this.lineChartData[0].data.push(
            data.recovered
          );
          this.lineChartLabels.push(
            data.dateChecked.slice(5,10)
          );
          break;
        case 'deaths':
          this.lineChartData[0].data.push(
            data.death
          );
          this.lineChartLabels.push(
            data.dateChecked.slice(5,10)
          );
          break;
        case 'hospitalized':
          this.lineChartData[0].data.push(
            data.hospitalized
          );
          this.lineChartLabels.push(
            data.dateChecked.slice(5,10)
          );
          break; 
      }
    })
    this.loading = true;
  }

  changeOption(option: any) {
    this.initChart(option);
  }

  @Input() historicalData: any;
}
