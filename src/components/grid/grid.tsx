import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-grid',
  styleUrl: 'grid.css'
})
export class grid {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Grid</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
      </ion-content>
    ];
  }
}
