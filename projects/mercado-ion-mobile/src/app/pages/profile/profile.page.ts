import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { IonStorageService } from '../../shared/services/ionstorage.service';
import { IResAuthLogin } from '../../shared/types/responses/ResAuthLogin';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  updateUserForm: FormGroup;
  // Fields
  firstNameField: FormControl;
  lastNameField: FormControl;
  usernameField: FormControl;
  emailField: FormControl;
  // 
  changePasswordForm: FormGroup;
  //  
  currentPasswordField: FormControl;
  newPasswordField: FormControl;
  confirmNewPasswordField: FormControl;
  // 
  storedUser: Observable<IResAuthLogin>;
  constructor(
    protected router: Router,
    protected translate: TranslateService,
    private ionsStorage: IonStorageService,
  ) {

  }
  ionViewWillEnter() {
    this.storedUser = this.ionsStorage.getKeyAsObservable('user');
    this.storedUser.subscribe(
      (storedUser) => {
        console.log(storedUser.user);
      },
    );
    this.setupForms();
  }
  ngOnInit() {
  }
  setupForms() {
    this.firstNameField = new FormControl('');
    this.lastNameField = new FormControl('');
    this.usernameField = new FormControl('');
    this.emailField = new FormControl('');
    // 
    this.currentPasswordField = new FormControl('');
    this.newPasswordField = new FormControl('');
    this.confirmNewPasswordField = new FormControl('');
    // 
    this.updateUserForm = new FormGroup({
      firstName: this.firstNameField,
      lastName: this.lastNameField,
      username: this.usernameField,
      email: this.emailField,
    });
    this.changePasswordForm = new FormGroup({
      currentPasswordField: this.currentPasswordField,
      newPasswordField: this.newPasswordField,
      confirmNewPasswordField: this.confirmNewPasswordField,
    });
  }
  updateUser() {
    console.log(this.updateUserForm.value);
  }
  updatePassword() {
    console.log(this.changePasswordForm.value);
  }
  homePage() {
    this.router.navigateByUrl('tabs/home');
  }
}
