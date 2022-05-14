import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeIn = [
    trigger('fadein', [
        state('void', style({ opacity: 0 })),
        transition('void => *', [
            style({ opacity: 0 }),
            animate('900ms ease-out', style({ opacity: 1 }))
        ])
    ]),
];
