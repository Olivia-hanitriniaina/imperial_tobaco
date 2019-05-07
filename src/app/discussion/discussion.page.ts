import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.page.html',
  styleUrls: ['./discussion.page.scss'],
})
export class DiscussionPage implements OnInit {

  constructor(private router : Router, private storage : Storage) { }

  ngOnInit() {
  }

  open_menu(){
    this.storage.set("last" , "discussion") ;
    this.router.navigate(['menu']) ;
  }

}
