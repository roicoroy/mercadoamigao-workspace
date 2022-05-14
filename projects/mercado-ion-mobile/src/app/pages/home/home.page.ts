
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  constructor(
    protected router: Router,
  ) { }

  ngOnInit(): void {

  }
  loadStripeProducts() {
  }
  sellOnStrapi(productId) {
  }
  onSlideChange() {
  }
  logout(): void {
    this.router.navigateByUrl('login');
  }
  profile() {
    this.router.navigateByUrl('tabs/profile');
  }
  uploadPage() {
    this.router.navigateByUrl('upload');
  }

}
