import { Component } from '@angular/core';
import { CountryService } from '../country.service';


@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [],
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.scss'
})
export class WorldMapComponent {

  country: any = {};


  constructor(private countryService: CountryService) {

  }


  setCountryData(event: any) {
    console.log('event', event.target.id);
    this.countryService.setCountryData(event.target.id).subscribe((data: any) => {
      console.log(data)
      this.country = {
        ...data
      }
    })
  }




}



