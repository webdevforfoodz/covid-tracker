import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { GetHistoricalDataService } from 'src/app/services/get-historical-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any[] = [];
  historicalData: any = [];
  date: any = 0;

  constructor(private getDataService: GetDataService, private getHistoricalData: GetHistoricalDataService) { }

  ngOnInit(): void {
    this.getData();
    this.getHistorical();
  }

  getData() {
    this.getDataService.getCurrentUsCovidData().subscribe(
      data => {
        let x = data[0];
        // console.table(x)
        Object.keys(x).forEach((val:any) => 
          x[val] = x[val].toLocaleString()
        )
        this.data = x;

        this.date = data[0].dateChecked.slice(0,10);
      }
    )
  }

  getHistorical() {
    this.getHistoricalData.getHistoricalData().subscribe(
      data => {
        this.historicalData = data;
        console.log(data);
      }
    )
  }

}
