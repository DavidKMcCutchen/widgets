import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import the BrowserAnimationsModule
// import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CalendarModule, FormsModule],
  selector: 'widget-collection-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  // constructor(
  //   private commonModule: CommonModule,
  //   private browserAnimationsModule: BrowserAnimationsModule,) {
  // }

  title = 'basic-chart';

  date: Date[] | undefined;

}
