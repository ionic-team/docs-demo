import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-toolbar',
  styleUrl: 'toolbar.css'
})
export class toolbar {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Toolbar</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
      </ion-content>
    ];
  }
}
