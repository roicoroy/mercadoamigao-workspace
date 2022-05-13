import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    protected router: Router,
    protected translate: TranslateService,
  ) {

  }
  ngOnInit() {
  }
  update() {
  }
  home() {
    this.router.navigateByUrl('tabs/home');
  }
}
