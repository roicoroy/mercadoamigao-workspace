/* eslint-disable @typescript-eslint/naming-convention */
import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NativeBiometric } from 'capacitor-native-biometric';
import { AlertsService } from 'projects/strapi-auth/src/lib/services/alert.service';
import { IonStorageService } from 'projects/strapi-auth/src/lib/services/ionstorage.service';
import { AuthService } from 'projects/strapi-auth/src/public-api';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  constructor(
    protected authService: AuthService,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    protected translate: TranslateService,
  ) { }

  ngOnInit(): void {
    // this.rememberMe = false;
  }

  ngOnDestroy(): void { }
  ionViewWillEnter() {
  }
  public login(): void {
  }
  registerPage() {
    this.router.navigateByUrl('register');
  }
  resetPassPage() {
    this.router.navigateByUrl('reset-password');
  }
  requestPassPage() {
    this.router.navigateByUrl('request-password');
  }
}
