import { Component, OnInit } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader"
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  constructor() { 
  }
  ngOnInit(): void {
    const loader = new Loader({
      apiKey: "AIzaSyCmGeyG9eLi8mLEzSFA5_T5k_KUQTvpzgA"
    });
    
    loader.load().then(() => {
    new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    });
  }

}
