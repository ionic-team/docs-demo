import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-refresher',
  styleUrl: 'refresher.css'
})
export class refresher {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Refresher</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
      </ion-content>
    ];
  }
}
