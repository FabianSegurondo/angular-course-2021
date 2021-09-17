import { Component, OnInit } from '@angular/core';
import {PublicationService} from "../shared/services/publication.service";
import {filter} from "rxjs/operators";
import {HomeService} from "./home.service";
@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  posts:any[] = [];

  constructor(private publicationService: PublicationService,
              private homeService: HomeService) { }

  ngOnInit(): void {

    this.homeService.currentLoad().pipe(filter(s => s === true))
      .subscribe(s => this.loadData())


this.loadData();
  }

  onShowMessage():void{
  }


  loadData(){
    this.publicationService.getAll().subscribe(res => {

      this.posts = Object.entries(res).map((s: any) => ({id: s[0], ...s[1]}));
      console.log(res);

    })
  }

}