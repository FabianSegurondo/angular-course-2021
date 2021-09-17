import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'person',
  template:`
  <div
  [style.border]= "'1px solid black'" 
  style="float: left; margin: 10px; padding: 10px; font-family: sans-serif;
  font-size: 110%; color: white" [style.background] = "vaccined ? 'green' : 'orange'" >
  <p>Name: {{name | titlecase}}</p>
  <p>Age : {{age}}</p>
  <p>Date: {{date|date: 'yyyy/MM/dd'}}</p>
  <p *ngIf=!vaccined>
    Disease: {{disease | toString}}
  <p>
  <p *ngIf=!vaccined > 
    Vaccine Type: {{vaccineType}}
  <p>
  <p *ngIf=vaccined> 
    Vaccined: Yes
  </p>
  <p *ngIf=!vaccined> 
    Vaccined: No
  </p>
  <p *ngIf=!vaccined > 
    Doses: {{doses}}
  <p>
  <ng-content></ng-content>
  </div>
  `
})
export class PersonComponent implements OnInit {

  @Input() id:string;
  @Input() name:string;
  @Input() age:number;
  @Input() date:string;
  @Input() disease:boolean;
  @Input() vaccineType:string;
  @Input() vaccined:number;
  @Input() doses:number;
  
  constructor() { }

  ngOnInit() {
  }

}