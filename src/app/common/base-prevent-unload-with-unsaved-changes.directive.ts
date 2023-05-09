import { Directive, HostListener } from '@angular/core';
import { HasUnsavedChanges } from './without-unsaved-changes.guard';

/* Opción de la Herencia */

@Directive()
export abstract class BasePreventUnloadWithUnsavedChanges
  implements HasUnsavedChanges
{
  @HostListener('window:beforeunload', ['$event'])
  onUnloadHandler(e: BeforeUnloadEvent) {
    return this.hasUnsavedChanges() === false;
  }

  abstract hasUnsavedChanges(): boolean;
}
