import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Rodrigo';

  userData = {
    email: 'rodrigo-java@utfpr.edu.br',
    role: 'discente',
  };

  title = 'Control Manager Services';
}
