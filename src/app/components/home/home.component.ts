import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any = {};
  historicalData: any = [];
  date: any = 0;
  fetchStatus: boolean = false;

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
        
        // console.table(x)
      }
    )
  }

  getHistorical() {
    this.getDataService.getHistoricalData().subscribe(
      data => {
        this.historicalData = data;
        this.fetchStatus = true
      }
    )
  }

}
