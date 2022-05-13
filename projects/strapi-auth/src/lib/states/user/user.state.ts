import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { IonStorageService } from '../../services/ionstorage.service';
import { IUser } from '../../types/models/User';
import { UserActions } from './user.actions';

export class UserStateModel {
    userObj: IUser;
    isLoggedIn: boolean;
}

@State<UserStateModel>({
    name: 'userState',
    defaults: {
        userObj: null,
        isLoggedIn: null,
    }
})
@Injectable()
export class UserState {

    constructor(
        public ionStorage: IonStorageService,
    ) { }

    @Selector()
    static getUserState(state: UserStateModel) {
        return state;
    }
    @Action(UserActions.Set)
    setUSerState({ getState, setState }: StateContext<UserStateModel>, { payload }: UserActions.Set) {
        if (payload) {
            const state = getState();
            return setState({
                ...state,
                userObj: payload,
                isLoggedIn: true
            });
        }
    }
    @Action(UserActions.Out)
    addUserState({ getState, patchState }: StateContext<UserStateModel>) {
        const state = getState();
        return patchState({
            ...state,
            userObj: null,
            isLoggedIn: false
        });
    }
}
