import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { IResAuthLogin, IUser } from 'projects/strapi-auth/src/public-api';
import { Observable, Subject } from 'rxjs';
import { IonAuthService } from '../../shared/services/ion.auth.service';
import { IonStorageService } from '../../shared/services/ionstorage.service';
import { UserActions } from '../../shared/states/user/user.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  usernameField: FormControl;
  emailField: FormControl;
  passwordField: FormControl;
  confirmpasswordField: FormControl;
  
  constructor(
    protected cd: ChangeDetectorRef,
    protected router: Router,
    protected authService: IonAuthService,
    protected translate: TranslateService,
    public formBuilder: FormBuilder,
    private store: Store,
  ) { }
  
  ngOnInit() {
    this.setupForm();
  }
  setupForm() {
    this.usernameField = new FormControl('test123', Validators.required);
    this.emailField = new FormControl('test123@test.com', Validators.required);
    this.passwordField = new FormControl('Rwbento123!', Validators.required);
    this.confirmpasswordField = new FormControl('Rwbento123!', Validators.required);
    return this.registerForm = new FormGroup({
      username: this.usernameField,
      email: this.emailField,
      password: this.passwordField,
      confirmpassword: this.confirmpasswordField,
    });
  }
  submitRegister() {
    console.log(this.registerForm.value);
    const passwordCheck = this.passwordField.value;
    this.authService.register(this.emailField.value, this.usernameField.value, passwordCheck).subscribe(
      (userObj) => {
        console.log(userObj);
        if (userObj != null) {
          this.store.dispatch(new UserActions.Set(userObj));
          this.router.navigateByUrl('tabs/home');
        }
      },
      (err) => {
        console.log(err.data);
        console.log(err.error);
      },
    );
  }
  loginPage() {
    this.router.navigateByUrl('login');

  }
}
