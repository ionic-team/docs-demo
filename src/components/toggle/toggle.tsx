import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-toggle',
  styleUrl: 'toggle.css'
})
export class toggle {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Toggle</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
      </ion-content>
    ];
  }
}
