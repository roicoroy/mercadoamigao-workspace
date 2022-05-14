/* eslint-disable @typescript-eslint/naming-convention */
import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { fade, fadeWithZoom } from '../../shared/animations/animations';
import { AlertsService } from '../../shared/services/alert.service';
import { IonAuthService } from '../../shared/services/ion.auth.service';
import { IonStorageService } from '../../shared/services/ionstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  animations: [fade(), fadeWithZoom()],
})
export class LoginPage implements OnInit, OnDestroy {

  showMessages: any = {
    error: true,
    success: true
  };

  errors: string[] = [];
  messages: string[] = [];
  submitted = false;
  rememberMe = false;

  authLoginReq = {
    email: 'test@test.com',
    password: 'Rwbento123!'
  };

  config = {
    passwordRequired: true,
    passwordMinLength: 6,
    passwordMaxLength: 60,
    emailRequired: true
  };

  constructor(
    protected authService: IonAuthService,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    protected translate: TranslateService,
    private alerts: AlertsService,
    private storage: IonStorageService
  ) { }

  ngOnInit(): void {
    // this.rememberMe = false;
  }

  ngOnDestroy(): void { }
  ionViewWillEnter() {
    this.unLock();
  }
  async unLock() {
    const Password = await this.storage.storageGet('user_pass');
    const Biometric = await this.storage.storageGet('biometric');

    if (Password) {
      if (Biometric) {
        this.alerts.fingerPrintAIO();
      } else {
        this.alerts.checkPass();
      }
    } else {this.alerts.setPass();};
  }

  async removeData() {
    await this.storage.storageRemove('user_pass');
    await this.storage.storageRemove('biometric');
    this.alerts.toastInfo('Data Removed!');
  }
  public login(): void {
    this.errors = [];
    this.messages = [];
    this.submitted = true;

    this.authService
      .login(this.authLoginReq.email, this.authLoginReq.password)
      .subscribe((res) => {
        // console.log(res);
        this.submitted = false;
        this.router.navigateByUrl('home');
        // console.log(this.authService.isAuthenticated);
      },
        (err: HttpErrorResponse) => {
          this.submitted = false;
          // console.log(err);
          if (err.status === 400) {
            switch (err.error.data[0].messages[0].id) {
              case 'Auth.form.error.confirmed':
                this.errors.push(
                  this.translate.instant('errors.auth.login.email_verification')
                );
                break;
              case 'Auth.form.error.blocked':
                this.errors.push(
                  this.translate.instant('errors.auth.login.account_blocked')
                );
                break;

              default:
                this.errors.push(
                  this.translate.instant('errors.auth.login.password_or_email')
                );
                break;
            }
          } else {
            this.errors.push(
              this.translate.instant('errors.auth.login.undefined')
            );
          }
        }
      );
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
