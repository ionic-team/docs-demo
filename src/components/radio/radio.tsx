import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-radio',
  styleUrl: 'radio.css'
})
export class radio {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Radio</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
      </ion-content>
    ];
  }
}
