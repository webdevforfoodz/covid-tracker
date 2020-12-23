import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import statesName from '../../utils/states.json'

@Component({
  selector: 'app-statesdata',
  templateUrl: './statesdata.component.html',
  styleUrls: ['./statesdata.component.scss']
})
export class StatesdataComponent implements OnInit {

  statesData: any = [];
  selectedStateData: any = [];
  states: {
    [key: string]: string
  } = statesName.states[0]
  stateName: string = 'California';
  options: any[] = [];

  constructor(private getDataService: GetDataService) { }

  ngOnInit(): void {
    this.getData('AZ');
    this.getOptions();
  }

  getData(state: string) {
    this.getDataService.getStatesCurrrentData().subscribe(
      data => {
        this.statesData = data;
        this.selectedStateData = data.filter((x:any) => x.state === state)
        this.getStateName(state)
      }
    )
  }

  getStateName(name: string) {
    Object.keys(statesName.states[0]).map(state => {
      if (state === name) {
        this.stateName = this.states[state];
      }
    })
  }

  getOptions() {
    Object.keys(statesName.states[0]).map((state:any) => {
      this.options.push(this.states[state])
    })
  }

  updateValues(value: any) {
    Object.keys(statesName.states[0]).map((state:any) => {
      if (this.states[state] === value) {
        this.selectedStateData = this.statesData.filter((x:any) => x.state === state);
        Object.keys(this.selectedStateData[0]).map((x:any) => {
          if (this.selectedStateData[0][x] == null ) {
            this.selectedStateData[0][x] = 'N/A'
          }
        })
        this.getStateName(state)
      }
    })
  }

}
