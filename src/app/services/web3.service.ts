import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Config } from './types';

declare let Web3:any;
declare let web3:any;


@Injectable()
export class Web3Service {

  constructor() {
    console.log(Web3);
    try {
      if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
      } else {
        // set the provider you want from Web3.providers
        web3 = new Web3(new Web3.providers.HttpProvider(`http://localhost:${Config.defaultPort}`));
      }
    } catch (err) {
      throw err;
    }
  }

  getCurrentNetwork(): Observable<string> {
    console.log(web3);
    return new Observable((observer) => {
      web3.version.getNetwork((err, netId) => {
        switch (netId) {
          case NetworType.MainNet:
            observer.next('This is mainnet');
            observer.complete();
            break;
          case NetworType.Morden:
            observer.next('This is the deprecated Morden test network.');
            observer.complete();
            break;
          case NetworType.Ropsten:
            observer.next('This is the ropsten test network.');
            observer.complete();
            break;
          case NetworType.Rinkeby:
            observer.next('This is the Rinkeby test network.');
            observer.complete();
            break;
          case NetworType.Kovan:
            observer.next('This is the Kovan test network.');
            observer.complete();
            break;
          default:
            observer.next('This is an unknown network.');
            observer.complete();
        }
      })
    });
  }

}

export enum NetworType {
  MainNet = "1",
  Morden = "2",
  Ropsten = "3",
  Rinkeby = "4",
  Kovan = "42",
}
