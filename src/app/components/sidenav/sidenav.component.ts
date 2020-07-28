import { Component, OnInit } from '@angular/core';
import { Flight } from '../../models/Flight';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {


  flights: Flight[] = [];


  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.flightService.getFlights().subscribe(flights => this.flights = flights);
  }

}
