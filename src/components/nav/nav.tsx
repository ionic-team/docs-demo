import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-nav',
  styleUrl: 'nav.css'
})
export class nav {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Nav</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
      </ion-content>
    ];
  }
}
