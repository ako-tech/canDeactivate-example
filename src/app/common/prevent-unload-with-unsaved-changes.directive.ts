import {
  Directive,
  HostListener,
  Inject,
  InjectionToken,
  Self,
} from '@angular/core';
import { HasUnsavedChanges } from './without-unsaved-changes.guard';

export const UNSAVED_CHANGES_TOKEN = new InjectionToken<HasUnsavedChanges>(
  'UNSAVED_CHANGES_TOKEN'
);

/* For Composition with hostDirective + providers*/
@Directive({ standalone: true })
export class PreventUnloadWithUnsavedChanges {
  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnloadHandler(e: BeforeUnloadEvent) {
    return this.component.hasUnsavedChanges() === false;
  }

  constructor(
    @Inject(UNSAVED_CHANGES_TOKEN) @Self() private component: HasUnsavedChanges
  ) {}
}
