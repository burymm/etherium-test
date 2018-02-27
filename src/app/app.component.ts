import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Web3Service } from './services/web3.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  currentNetwork;

  constructor(private web3: Web3Service,
              private ref: ChangeDetectorRef) {}

  get network(): string {
    return this.currentNetwork;
  }

  ngOnInit(): void {
    this.web3.getCurrentNetwork().subscribe((network) => {
      this.currentNetwork = network;
      this.ref.detectChanges()
    });
  }
}
