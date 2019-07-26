import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-fab',
  styleUrl: 'fab.css'
})
export class fab {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Fab</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
      </ion-content>
    ];
  }
}
