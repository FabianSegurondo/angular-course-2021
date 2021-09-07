import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'wallets',
  template: `
  <div [style.background]=" eth+btc > 10 ? 'brown' : 'gray'"
       style="float: left; margin: 10px; padding: 10px;">
	  <p>Wallet: {{wallet}}</p>
    <p>Nombre: {{name|uppercase}}</p>
	  <p>ETH: {{eth}}</p>
	  <p>BTC: {{btc}}</p>
  </div>
  `,
})
export class WalletsComponent {

  @Input() wallet:string;
  @Input() name:string;
  @Input() eth:number;
  @Input() btc:number;

  constructor() { }

}