import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  currentWeather: WeatherData = new WeatherData({});
  forecastData: any;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const lat = params['lat'];
      const lon = params['lon'];

      // Fetch current weather data based on lat and lon
      this.weatherService.getCurrentWeather(lat, lon).subscribe(
        (data) => {
          this.currentWeather = new WeatherData(data)
          console.log(this.currentWeather)
        },
        (error) => {
          console.error('Error fetching current weather data:', error);
        }
      );

      // Fetch forecast data based on lat and lon
      this.weatherService.getForecast(lat, lon).subscribe(
        (data) => {
          this.forecastData = data.list;
          console.log(this.forecastData)
        },
        (error) => {
          console.error('Error fetching forecast data:', error);
        }
      );
    });
  }

  formatDate(unixTimestamp: number): string {
    const date = new Date(unixTimestamp * 1000);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour:'numeric',
      minute:'numeric'
    };
    return date.toLocaleDateString('en-US', options);
  }
}

export class WeatherData {
  coord: Coord
  weather: Weather[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number

  constructor(data:any){
    data=data||{}
    this.base=data.base||''
    this.clouds= new Clouds(data.clouds)||new Clouds({})
    this.cod=data.cod||-1
    this.coord= new Coord(data.coord)||new Coord({})
    this.dt=data.dt||-1
    this.id=data.id||-1
    this.main=new Main(data.main)||new Main({})
    this.name= data.name||''
    this.sys= new Sys(data.sys)||new Sys({})
    this.timezone=data.timezone||-1
    this.visibility=data.visibility||-1
    this.weather= data?.weather?.map((item:Weather)=>new Weather(item)) || [new Weather({})]
    this.wind=new Wind(data.wind)||new Wind({})
  }
}

export class Coord {
  lon: number
  lat: number
  constructor(data:any){
    data=data||{}
    this.lon=data.lon||-1
    this.lat=data.lat||-1
  }
}


export class Weather {
  id: number
  main: string
  description: string
  icon: string
  constructor(data:any){
    data=data||{}
    this.description=data.description||''
    this.icon=data.icon||''
    this.id=data.id||-1
    this.main=data.main||''
  }
}

export class Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
  constructor(data:any){
    data=data||{}
    this.feels_like=data.feels_like||-1
    this.grnd_level=data.grnd_level||-1
    this.humidity=data.humidity||-1
    this.pressure=data.pressure||-1
    this.sea_level=data.sea_level||-1
    this.temp=data.temp||-1
    this.temp_max=data.temp_max||-1
    this.temp_min=data.temp_min||-1
  }
}

export class Wind {
  speed: number
  deg: number
  gust: number
  constructor(data:any){
    data=data||{}
    this.deg=data.deg||-1
    this.gust=data.gust||-1
    this.speed=data.speed||-1
  }
}

export class Clouds {
  all: number
  constructor(data:any){
    data=data||{}
    this.all=data.all||-1
  }
}

export class Sys {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
  constructor(data:any){
    data=data||{}
    this.country=data.country||''
    this.id=data.id||-1
    this.sunrise=data.sunrise||-1
    this.sunset=data.sunset||-1
    this.type=data.type||-1
  }
}

