import { Component, OnInit } from '@angular/core';
import { get } from 'scriptjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cryptonkdesktop';
  AAPL: string = 'AAPL';

  ngOnInit() {
    get('https://www.livecoinwatch.com/static/lcw-widget.js', () => {
      //Google Maps library has been loaded...
    });

  }

}
