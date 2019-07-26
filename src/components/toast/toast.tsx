import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-toast',
  styleUrl: 'toast.css'
})
export class toast {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Toast</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
      </ion-content>
    ];
  }
}
