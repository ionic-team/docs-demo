import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-progress',
  styleUrl: 'progress.css'
})
export class progress {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Progress</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
      </ion-content>
    ];
  }
}
