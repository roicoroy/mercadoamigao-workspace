/* eslint-disable @typescript-eslint/naming-convention */
import { ChangeDetectorRef, Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { fade, fadeWithZoom } from '../../shared/animations/animations';
import { Keyboard } from '@capacitor/keyboard';
import { KeypadFacade } from '../../shared/keypad/keypad.facade';
import { IonAuthService } from '../../shared/services/ion.auth.service';
import { Store } from '@ngxs/store';
import { UserActions } from '../../shared/states/user/user.actions';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  animations: [fade(), fadeWithZoom()],
})
export class LoginPage implements OnInit {
  login_form: FormGroup;
  validation_messages = {
    username: [
      { type: 'required', message: 'Username is required.' },
      { type: 'minlength', message: 'Username must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
      { type: 'validUsername', message: 'Your username has already been taken.' }
    ],
    name: [
      { type: 'required', message: 'Name is required.' }
    ],
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ],
    confirm_password: [
      { type: 'required', message: 'Confirm password is required.' }
    ],
    matching_passwords: [
      { type: 'areEqual', message: 'Password mismatch.' }
    ],
    terms: [
      { type: 'pattern', message: 'You must accept terms and conditions.' }
    ],
  };
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private animationCtrl: AnimationController,
    private keyboardFacade: KeypadFacade,
    private auth: IonAuthService,
    private store: Store,
  ) {
  }
  ngOnInit() {
    this.login_form = this.formBuilder.group({
      email: new FormControl('test@test.com', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('Rwbento123!', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
    });
  }
  onSubmit(values) {
    // console.log(values);
    // this.router.navigate(['/user']);
    console.log(this.login_form.value);


  }
  public login(): void {
    console.log(this.login_form.value.email, this.login_form.value.password);
    this.auth.login(this.login_form.value.email, this.login_form.value.password).subscribe(
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
