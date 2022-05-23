import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UpdateKeyboardStatus } from './keyboard/keyboard.actions';
import { KeyboardState } from './keyboard/keyboard.state';


/**
 * KeypadFacade
 * - get action on the Biometric State
 * - provide selectors for:
 *      - keypad on device
 */
@Injectable({
    providedIn: 'root'
})
export class KeypadFacade {

    constructor(
        private readonly store: Store,
    ) { }

    @Select(KeyboardState.isOpen) keyboardIsOpen$: Observable<boolean>;

    setKeyboardOpen(keyboardIsOpen: boolean): void {
        // console.log(keyboardIsOpen);
        this.store.dispatch(new UpdateKeyboardStatus(keyboardIsOpen));
    }

}
