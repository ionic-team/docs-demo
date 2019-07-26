import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-popover',
  styleUrl: 'popover.css'
})
export class popover {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Popover</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
      </ion-content>
    ];
  }
}
