import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-reorder',
  styleUrl: 'reorder.css'
})
export class reorder {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Reorder</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
      </ion-content>
    ];
  }
}
