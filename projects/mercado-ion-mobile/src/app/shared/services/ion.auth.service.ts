/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';

import { IUser } from '../types/models/User';
import { IReqAuthRegister } from '../types/requests/ReqAuthRegister';
import { IResAuthLogin } from '../types/responses/ResAuthLogin';
import { IResAuthRegister } from '../types/responses/ResAuthRegister';
import { map, tap } from 'rxjs/operators';
import { IonStorageService } from './ionstorage.service';
import { Store } from '@ngxs/store';
import { UserActions } from '../states/user/user.actions';
import { environment } from 'projects/mercado-frontend/src/environments/environment';
import { IReqUserUpdate } from '../types/requests/ReqUserUpdate';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IonAuthService {
  private token: string;
  user;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    private storageService: IonStorageService,
    private store: Store,
  ) {
  }
  login(email: string, password: string) {
    const user = {
      identifier: email,
      password
    };
    return this.http.post(environment.API_BASE_PATH + '/auth/local', user, { headers: this.headers }).pipe(
      tap((userObj: IResAuthLogin) => {
        this.setTokenResponse(userObj as IResAuthLogin);
        // this.store.dispatch(new UserActions.Set(userObj));
      })
    );
  }
  register(email: string, username: string, password: string) {
    const req: IReqAuthRegister = {
      username,
      email,
      password
    };
    return this.http.post(environment.API_BASE_PATH + '/auth/local/register', {
      username: req.username,
      email: req.email,
      password: req.password,
    }, { headers: this.headers }).pipe(
      tap(
        (userObj: IResAuthLogin) => {
          this.setTokenResponse(userObj as IResAuthLogin);
          this.store.dispatch(new UserActions.Set(userObj));
        }
      ),
    );
  }
  async updateUser(email: string, username: string, password: string) {
    const newUser = {
      username: '',
      email: '',
      password: '',
      oldPassword: '',
    } as IReqUserUpdate;

    // const res: IUser | HttpErrorResponse = (await lastValueFrom(
    return this.http.put(environment.BASE_PATH + '/users/me', newUser).pipe(
      tap(
        (userObj: IResAuthLogin) => {
          this.setTokenResponse(userObj as IResAuthLogin);
          this.store.dispatch(new UserActions.Set(userObj));
        }
      )
    )
    // )) as IUser | HttpErrorResponse;
    // return this.http.put(environment.BASE_PATH + '/users/me', {
    //   username: req.username,
    //   email: req.email,
    //   password: req.password,
    // }, { headers: this.headers }).pipe(
    //   tap((userObj: IResAuthLogin) => {
    //     this.setTokenResponse(userObj as IResAuthLogin);
    //     this.store.dispatch(new UserActions.Set(userObj));
    //   }),
    // );
  }
  public async logout(): Promise<void> {
    this.user = null;
    this.storageService.storageRemove('token');
    this.storageService.storageRemove('user');
    this.store.dispatch(new UserActions.Out());
  }
  private setTokenResponse(res: IResAuthRegister | IResAuthLogin): void {
    if (res.jwt && res.user) {
      this.token = res.jwt;
      this.user = res.user as IUser;
      this.storageService.storageSet('token', this.token);
      this.storageService.storageSet('user', res);
    }
  }
}
