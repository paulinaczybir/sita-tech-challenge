import { Component, OnInit } from '@angular/core';
import { Flight } from '../../models/Flight';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {


  flights: Flight[] = [{id: 1, origin: "Bhag", destination: "jfhsg"}];


  constructor() { }

  ngOnInit(): void {
  }

}
