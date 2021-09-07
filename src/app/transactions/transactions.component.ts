import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'transactions',
  template: `
  <div [style.background]="mineType === 'PoW'? 'yellow' : 'green'"
       style="float: left; margin: 10px; padding: 10px;">
	  <p>Date: {{date}}</p>
    <p>From: {{from}}</p>
	  <p>To: {{to}}</p>
	  <p>Quantity: {{quantity}}</p>
    <p>MoneyType: {{moneyType | uppercase}}</p>
    <p>MineType: {{mineType}}</p>
    <p>Miner: {{miner}}</p>
    <button *ngIf="mineType === 'PoS' else myVarElse" 
            (click)="onActivated()"
            [disabled]="miner >= 20">
            mine
    </button>
    <ng-template #myVarElse>
        <button (click)="onActivated()">mine
        </button>
    </ng-template>
  </div>
  `,
})
export class TransactionsComponent{

  @Input() date: string;
  @Input() from: string;
  @Input() to: string;
  @Input() quantity:number;
  @Input() moneyType: string;
  @Input() mineType: string;
  @Input() miner:number;
  @Output() startTransaction = new EventEmitter();

  constructor() { }

  onActivated() {
    this.startTransaction.emit();
  }

}
