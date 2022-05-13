import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.page.html',
  styleUrls: ['./cancel.page.scss'],
})
export class CancelPage implements OnInit {

  constructor(
    protected router: Router
  ) { }

  ngOnInit() {
  }
  home(){
    this.router.navigateByUrl('home');
  }
}
