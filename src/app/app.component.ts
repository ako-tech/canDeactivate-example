import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimation } from './common/route.animation';

@Component({
  selector: 'ako-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div [@routeAnimation]="prepareRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </div>
  `,
  styles: [
    `
      :host {
        width: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routeAnimation],
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet): string {
    return outlet?.isActivated &&
      outlet.activatedRoute.routeConfig?.path === ':id'
      ? 'edit'
      : 'list';
  }
}
