import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wallets',
  template:` <div [style.background]=" (eth+btc) > 5 ? 'sienna' : (eth+btc) < 2 ? 'gray' : '	ivory'"
  style="float: left; margin: 10px; padding: 10px;">
  <p>Wallet: {{wallet}}</p>
  <p>Nombre: {{name | uppercase}}</p>
  <p>ETH: {{eth}}</p>
  <p>BTC: {{btc}}</p>
</div>`,
})
export class WalletsComponent implements OnInit {
  @Input() id;
  @Input() wallet;
  @Input() name;
  @Input() eth;
  @Input() btc;
  constructor() { }

  ngOnInit() {
  }

}