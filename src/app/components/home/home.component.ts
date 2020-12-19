import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any = {};
  historicalData: any = [];
  date: any = 0;
  loading: boolean = false;
  
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
          labelString: 'Number of cases',
        },
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Date',
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit:10,
        }
      }]
    },
    title: {
      display: true,
      text: 'Number of confirmed Cases in 2020'
    }
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#121212',
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType: ChartType = 'line';

  constructor(private getDataService: GetDataService) { }

  ngOnInit(): void {
    this.getData();
    this.getHistorical();
  }

  getData() {
    this.getDataService.getCurrentUsCovidData().subscribe(
      data => {
        let x = data[0];
        Object.keys(x).forEach((val:any) => 
          x[val] = x[val].toLocaleString()
        )
        this.data = x;
        this.date = data[0].dateChecked.slice(0,10);
        
      }
    )
  }

  getHistorical() {
    this.getDataService.getHistoricalData().subscribe(
      data => {
        this.historicalData = data;
        this.initChart();
      }
    )
  }

  initChart() {
    this.historicalData.reverse().forEach((data:any) => {

      this.lineChartData[0].data.push(
        data.positive
      );
      this.lineChartLabels.push(
        data.dateChecked.slice(5,10)
      );
    })

    this.loading = true;
  }

}
