import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  dataSubscription: Subscription = new Subscription;
  stonkSet!: Set<string>;
  cryptoSet!: Set<string>;

  constructor(private userData: UserDataService) {

  }

  ngOnInit(): void {

    this.dataSubscription = this.userData.stonks.subscribe(message => this.stonkSet = message)
  }

}
