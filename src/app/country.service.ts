import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  fetchCountryData(country: string): Observable<any> {
    const apiUrl = `https://api.worldbank.org/v2/country/${country}?format=json`;
    return this.http.get(apiUrl);
  }

  setCountryData(country: string): Observable<any> {
    return this.fetchCountryData(country).pipe(
      map((response: any) => {
        const countryData = response[1][0];
        return {
          name: countryData.name,
          capitalCity: countryData.capitalCity,
          region: countryData.region.value,
          incomeLevel: countryData.incomeLevel.value,
          latitude: countryData.latitude,
          longitude: countryData.longitude
        };
      })
    );
  }
}
