import { Component } from '@angular/core';
import { TerminalService } from 'primeng/terminal';
import { Subscription } from 'rxjs';
import { UserDataService } from '../../user-data.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  providers: [TerminalService]
})
export class MyTerminalComponent {

  subscription: Subscription = new Subscription;
  dataSubscription: Subscription = new Subscription;
  stonkSet!: Set<string>;
  cryptoSet!: Set<string>;

  constructor(private terminalService: TerminalService, private userData: UserDataService) {
    this.terminalService.commandHandler.subscribe(command => {
      let response = this.getResponse(command);
      this.terminalService.sendResponse(response);
    });

    this.dataSubscription = this.userData.stonks.subscribe(message => this.stonkSet = message)
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getResponse = (command: string) => {
    switch (command) {
      case 'help':
        return 'To add stonks and bryptoboins to your account, type "s:{TICKER}" or "c:{TOKEN}"' +
          'We use livecoinwatch and tradingview for our charts. You can find them here: https://www.livecoinwatch.com/ and https://www.tradingview.com/' +
          'If the price does not seem right double check the IDs of the coins you are looking at on the websites: livecoinwatch uses underscores as a prefix for duplicate coin names.';
        break;
      case 'help2':
        return 'To add stonks and bryptoboins to your account, type "s:{TICKER}" or "c:{TOKEN}"';
        break;
      case 'date':
        return new Date().toDateString();
        break;
      default:
        if (command.startsWith('s:')) {
          const ticker = command.substring(2);
          this.userData.changeStonks(this.stonkSet.add(ticker));

        }
        else if (command.startsWith('c:')) {
          const token = command.substring(2);
          this.userData.changeCrypto(this.cryptoSet.add(token));

        }
        return 'Command not found.';
    }
  }
}

