import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lat: any;
  lng:any;

  constructor(
    private router: Router,
    private geolocation: Geolocation
  ) {}

  goPowers(){
    this.router.navigate(['powers']);
  }
  goInfo(){
    this.router.navigate(['informations']);
  }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then(res => {
      this.lat = res.coords.latitude;
      this.lng = res.coords.longitude;
      console.log(this.lat);
      // console.log(res);
      // let coord = res.coords;//res.coords
      // console.log(coord);
    }).catch(err => {
       console.log('Error getting location', err);
    });
  }

}
