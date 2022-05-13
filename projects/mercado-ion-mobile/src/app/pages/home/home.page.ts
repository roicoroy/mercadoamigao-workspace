
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthService } from 'projects/strapi-auth/src/public-api';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  constructor(
    protected router: Router,
    protected authService: AuthService,
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
    this.authService.logout().then(() => {
      this.router.navigateByUrl('auth/login');
    });

  }
  profile() {
    this.router.navigateByUrl('tabs/profile');
  }
  uploadPage() {
    this.router.navigateByUrl('upload');
  }

}
