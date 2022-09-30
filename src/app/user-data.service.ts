import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private stonkSource = new BehaviorSubject(new Set<string>());
  private cryptoSource = new BehaviorSubject(new Set<string>());
  stonks = this.stonkSource.asObservable();
  crypto = this.cryptoSource.asObservable();

  constructor() { }

  changeStonks(message: Set<string>) {
    this.stonkSource.next(message)
  }
  changeCrypto(message: Set<string>) {
    this.stonkSource.next(message)
  }
}
