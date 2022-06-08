import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='Piggy Bank';
  imagePath='/assets/images/bank.jpeg';

  constructor(public loginService:AuthenticationService){}
}
