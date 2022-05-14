/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { createAnimation, Animation } from '@ionic/core';

/**
 * Holds references to the elements participating in the transition.
 *
 * @todo replace by genuine Ionic interface after updating Ionic library
 */
interface TransitionOptions {
    baseEl: any;
    enteringEl: HTMLElement;
    leavingEl: HTMLElement | undefined;
    direction: string;
}

const DURATION = 300;

/**
 * Sets up entering and leaving animation for flow.
 * Used by Ionic components, which accept an input `Animation` object to customize their animation behavior.
 *
 * Example:
 * ``` ts
 * import { RoutingNavController } from '~/app/shared/controllers/routing-nav-controller';
 * this.navCtrl.navigateForward(url, { animation: slideAnimation });
 *
 * For explicit slide down
 * this.navCtrl.navigateForward(url, { animation: slideAnimation, animationDirection: 'back' });
 *
 * ```
 *
 * @param baseEl the router outlet component
 * @param opts transition options of type `TransitionOptions`. Contain references to the leaving and entering elements
 * @returns Flow slide up/down - entering and leaving animation
 */
export const slideAnimation = (baseEl: HTMLElement, opts?: TransitionOptions): Animation => opts.direction === 'forward'
    ? createSlideUpAnimation(opts)
    : createSlideDownAnimation(opts);

/**
 * Creates a "Slide up" animation for the given entering element.
 *
 * @param opts transition options of type `TransitionOptions`. Contain references to the leaving and entering elements
 * @returns slid up animation.
 */
function createSlideUpAnimation(opts: TransitionOptions): Animation {
    return createAnimation()
        .addElement(opts.enteringEl)
        .duration(DURATION)
        .easing('ease-out')
        .beforeStyles({ opacity: 1})
        .fromTo('transform', 'translateY(100%)', 'translateY(0%)');
}

/**
 * Creates a "Slide down" animation for the given leaving element.
 *
 * @param opts transition options of type `TransitionOptions`. Contain references to the leaving and entering elements
 * @returns slid down animation.
 */
function createSlideDownAnimation(opts: TransitionOptions): Animation {
    const enterAnimation = createAnimation()
        .addElement(opts.enteringEl)
        .beforeStyles({ opacity: 1});

    const leaveAnimation = createAnimation()
        .addElement(opts.leavingEl)
        .duration(DURATION)
        .easing('ease-in')
        .beforeStyles({ opacity: 1})
        .fromTo('transform', 'translateY(0%)', 'translateY(100%)');

    return createAnimation()
        .addAnimation(enterAnimation)
        .addAnimation(leaveAnimation);
}
