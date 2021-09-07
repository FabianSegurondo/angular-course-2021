import { Component, VERSION } from '@angular/core';
import { MinarService } from './minar.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})

export class AppComponent  {

  wallets=[]
  transactions=[]
  btc = 0
  eth = 0
  anyLeft = true;

  constructor(private fetcher:MinarService) { 
 
    this.fetcher.getWallets().subscribe(data => this.getDataWallets(data))
    this.fetcher.getTransactions().subscribe(data => this.getDataTransactions(data))
  }

  getDataWallets(data){

    this.wallets=Object.entries(data);
    this.updateTotalMoney()
  }

  getDataTransactions(data){

    this.transactions=Object.entries(data);
    this.transLeft()
  }

  printThis(){
    console.log(this.wallets)
  }

  onMine(idTrans, from, to, quantity, moneyType){
    var personFrom = this.wallets.filter(item => item[1]["wallet"] == from)
    var personTo = this.wallets.filter(item => item[1]["wallet"] == to)
    var newQuantPerFrom = personFrom[0][1][moneyType] - quantity
    var newQuantPerTo = personTo[0][1][moneyType] + quantity

    console.log(newQuantPerFrom)
    console.log(newQuantPerTo)

    if(moneyType === "btc"){
      this.fetcher.mineBTC(personFrom[0][0],newQuantPerFrom).subscribe(res => console.log(res))
      this.fetcher.mineBTC(personTo[0][0],newQuantPerTo).subscribe(res => console.log(res))
    }else{
      this.fetcher.mineETH(personFrom[0][0],newQuantPerFrom).subscribe(res => console.log(res))
      this.fetcher.mineETH(personTo[0][0],newQuantPerTo).subscribe(res => console.log(res))
    }

    this.fetcher.delete(idTrans).subscribe(res=>console.log(res))
    this.fetcher.getWallets().subscribe(data => this.getDataWallets(data))
    this.fetcher.getTransactions().subscribe(data => this.getDataTransactions(data))


    window.location.reload();
    

  }

  updateTotalMoney(){
    console.log(this.wallets)
    this.eth = 0
    this.btc = 0
    for(var i in this.wallets){
      this.eth = this.wallets[i][1]["eth"] + this.eth
      this.btc = this.wallets[i][1]["btc"] + this.btc
      console.log(this.btc)
    }
  }

  transLeft():boolean{
    return this.transactions.find(item => item[1]['mineType'] !== 'PoS' ||
    item[1]['miner'] > 20) === undefined
  }
}
