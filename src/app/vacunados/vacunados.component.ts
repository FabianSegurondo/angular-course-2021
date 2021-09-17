import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacunados',
  templateUrl: './vacunados.component.html',
  styleUrls: ['./vacunados.component.scss'],
})
export class VacunadosComponent implements OnInit {
  @Input() info: any;

  constructor() {}

  ngOnInit() {}
}