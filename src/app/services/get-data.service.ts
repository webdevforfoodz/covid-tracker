import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private url: string = 'https://api.covidtracking.com/v1/us/current.json';
  private urlHistorical: string = 'https://api.covidtracking.com/v1/us/daily.json';
  private urlStatesData: string = 'https://api.covidtracking.com/v1/states/current.json';


  constructor(private http: HttpClient) { }

  getCurrentUsCovidData(): Observable<any>{
    return this.http.get<any>(this.url)
      .pipe(
        catchError(this.handleError<any>('getCurrentUsCovidData',[]))
      )
  }

  getHistoricalData() {
    return this.http.get(this.urlHistorical)
      .pipe(
        catchError(this.handleError<any>('getCurrentUsCovidData',[]))
      )
  }

  getStatesCurrrentData() {
    return this.http.get<any>(this.urlStatesData)
    .pipe(
      catchError(this.handleError<any>('getCurrentUsCovidData',[]))
    )
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error:any): Observable<T> => {

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

}

