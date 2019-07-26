import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-modal',
  styleUrl: 'modal.css'
})
export class modal {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Modal</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
      </ion-content>
    ];
  }
}
