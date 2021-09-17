import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-no-vacunados',
  templateUrl: './no-vacunados.component.html',
  styleUrls: ['./no-vacunados.component.scss'],
})
export class NoVacunadosComponent implements OnInit {
  @Input() info: any;

  @Output() edit = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onEdit() {
    this.edit.emit();
  }
}