import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps';

@Component({
  selector: 'page-google_maps',
  templateUrl: 'google_maps.html'
})
export class TestGoogleMapsPage {
	map: GoogleMap;

	  constructor(public navCtrl: NavController) {
		this.loadMap();
	  }
	
	loadMap() {
	// Create a map after the view is ready and the native platform is ready.
   		this.map = GoogleMaps.create('map_canvas');
	}

}
