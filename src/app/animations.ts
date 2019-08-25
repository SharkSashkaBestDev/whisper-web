import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export let showHide = trigger('showHide', [
  state('show', style({
    visibility: 'visible',
    transform: 'rotateX(70deg) scale(0.3) translateY(0em)',
  })),
  state('hide', style({
    visibility: 'hidden',
    transform: 'rotateX(77deg) scale(2) translateY(30em)',
  })),
  transition('show => hide', [
    animate('3.5s')
  ])
]);
