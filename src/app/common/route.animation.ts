import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

const defaultState = query(':enter, :leave', [
  style({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'var(--body-bg-color)',
  }),
]);

const defaultDuration = '300ms';

const editIn = query(':enter', [
  style({ zIndex: 100, transform: 'translateX(100%)' }),
  animate(`${defaultDuration} ease-out`, style({ transform: 'translateX(0)' })),
]);
const editOut = query(':leave', [
  style({ zIndex: 100, transform: 'translateX(0)' }),
  animate(
    `${defaultDuration} ease-in`,
    style({ transform: 'translateX(100%)' })
  ),
]);

const listIn = query(':enter', [
  style({ transform: 'translateX(-20px)' }),
  animate(`${defaultDuration} ease-out`, style({ transform: 'translateX(0)' })),
]);
const listOut = query(':leave', [
  style({ transform: 'translateX(0)' }),
  animate(
    `${defaultDuration} ease-in`,
    style({ transform: 'translateX(-20px)' })
  ),
]);

export const routeAnimation = trigger('routeAnimation', [
  transition('* => edit', [defaultState, group([editIn, listOut])]),
  transition('edit => *', [defaultState, group([editOut, listIn])]),
]);
