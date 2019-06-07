import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.page.html',
  styleUrls: ['./informations.page.scss'],
})
export class InformationsPage implements OnInit {
  segment: string = "information";

  constructor() { }
  ngOnInit() {
  }

}
