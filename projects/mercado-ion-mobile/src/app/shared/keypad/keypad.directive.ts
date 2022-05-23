import { Directive, ElementRef, HostBinding, Input, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { KeypadFacade } from './keypad.facade';
import { Keyboard } from '@capacitor/keyboard';

/**
 * This directive monitors the keypad visibility
 */
@Directive({
    selector: '[eqmHideWhenKeypadVisible]'
})
export class KeyPadDirective implements OnDestroy {
    @HostBinding('class.isKeyboard') isKeyboard: boolean;

    private readonly ngUnsubscribe = new Subject();

    constructor(
        private readonly keypadFacade: KeypadFacade

    ) {
        // console.log('hello world!!!!!');
        // this.keypadFacade.keyboardIsOpen$.pipe(
        //     takeUntil(this.ngUnsubscribe))
        //     .subscribe((keyboardStatus: boolean) => {
        //         console.log(keyboardStatus);
        //     });
        this.keypadFacade.keyboardIsOpen$.pipe(
            takeUntil(this.ngUnsubscribe))
            .subscribe((keyboardStatus: boolean) => {
                // console.log(keyboardStatus);
                setTimeout(() => {
                    return keyboardStatus ? Keyboard.hide() : Keyboard.show();
                }, 100);
            });
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe.next(null);
        this.ngUnsubscribe.complete();
    }
}
