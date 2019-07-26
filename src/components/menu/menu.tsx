import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-menu',
  styleUrl: 'menu.css'
})
export class menu {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
      </ion-content>
    ];
  }
}
