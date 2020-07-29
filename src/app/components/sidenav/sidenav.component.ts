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
  currentFlight: Flight = null;


  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.flightService.getFlights().subscribe(flights => {
      this.flights = flights;
      this.currentFlight = flights[0];
    });
  }

  onClick(flight: Flight): void {
    this.currentFlight = flight;
    console.log('current id', this.currentFlight.id);
  }

}
