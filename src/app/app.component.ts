import { Component } from '@angular/core';

@Component({
  selector: 'bp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'booking-process';

  onOpenFlights() {
    // TODO logic to show flight list component
  }
}
