import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, Marker, Geocoder, GeocoderResult } from '@ionic-native/google-maps';

@Component({
  selector: 'page-google_maps',
  templateUrl: 'google_maps.html'
})
export class TestGoogleMapsPage {
	map: GoogleMap;
	search_address: string;

	  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
		this.loadMap();		
	  }
	
	loadMap() {
	// Create a map after the view is ready and the native platform is ready.
   		this.map = GoogleMaps.create('map_canvas');
	}

	showMarker(atitle: any, alat: any, along: any){
		let marker: Marker = this.map.addMarkerSync({
		  title: atitle,
		  icon: 'blue',
		  animation: 'DROP',
		  position: {
		    lat: alat,
		    lng: along
		  }
		});		
		marker.showInfoWindow();
	}
	
	onButtonClick(event){	
		// Address -> latitude,longitude
		Geocoder.geocode({
		  "address": this.search_address
		})
		.then((results: GeocoderResult[]) => {		
			this.presentAlert(JSON.stringify(results[0].position));
			let marker: Marker = this.map.addMarkerSync({
			  title: JSON.stringify(results[0].position),
			  icon: 'blue',
			  animation: 'DROP',
			  position: results[0].position
			});		
			marker.showInfoWindow();
		});
	}
	
	

  //show alert
	presentAlert(message : string) {
	  let alert = this.alertCtrl.create({
		title: 'Test alert',
		subTitle: message,
		buttons: ['OK']
	  });
	  alert.present();
	}
}
