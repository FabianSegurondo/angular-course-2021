import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider',
  template:
  `
  <p>
      Provider works!
  </p>
  `,
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}