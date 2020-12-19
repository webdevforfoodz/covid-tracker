import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetHistoricalDataService {

  private url: string = 'https://api.covidtracking.com/v1/us/daily.json';

  constructor(private http: HttpClient) { }

  getHistoricalData() {
    return this.http.get(this.url)
      // .pipe(
      //   catchError(this.handleError())
      // )
  }

  // handleError() {
  //   return (error:any) => {
  //     console.log(`${error.mesage}`)
  //   }
  // }
}
