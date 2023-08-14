import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  currentWeather: any;
  forecast: any;

  constructor(private route: ActivatedRoute, private weatherService: WeatherService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const lat = params['lat'];
      const lon = params['lon'];

      if (lat && lon) {
        this.weatherService.getCurrentWeather(lat, lon)
          .subscribe(currentWeather => {
            this.currentWeather = currentWeather;
          });

        this.weatherService.getForecast(lat, lon)
          .subscribe(forecast => {
            this.forecast = forecast;
          });
      }
    });
  }
}
