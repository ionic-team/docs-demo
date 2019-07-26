import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-icons',
  styleUrl: 'icons.css'
})
export class icons {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Icons</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
      </ion-content>
    ];
  }
}
