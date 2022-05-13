import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.page.html',
  styleUrls: ['./sucess.page.scss'],
})
export class SucessPage implements OnInit {
  sessionId;
  checkoutInfo;
  constructor(
    protected route: ActivatedRoute,
    protected router: Router,

  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(() => {
      this.sessionId = this.route.snapshot.queryParamMap.get('sessionId');
    });

  }
  home() {
    this.router.navigateByUrl('home');
  }
}
