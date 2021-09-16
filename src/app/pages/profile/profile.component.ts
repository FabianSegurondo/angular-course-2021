import { Component, OnInit } from '@angular/core';
import {PublicationService} from "../shared/services/publication.service";
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "../../core/services/auth.service";
import {ProfileService} from "./profile.service";
import {filter} from "rxjs/operators";

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  posts:any [] = []

  constructor(private publicationService: PublicationService,
              private matDialog: MatDialog,
              private authService: AuthService,
              private profileService:ProfileService) { }

  ngOnInit(): void {
    this.profileService.currentLoad().pipe(filter(s => s===true)).subscribe(s => this.loadData())
    this.loadData()
  }

  loadData(){
    const id = this.authService.getUserId();
    if(id){
      this.publicationService.getAllById(id).subscribe( res =>{
          this.posts = Object.entries(res).map((s: any) => ({id: s[0],...s[1]}))
          console.log(this.posts)
        }
      )
    }
  }

}