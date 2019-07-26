import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-slides',
  styleUrl: 'slides.css'
})
export class slides {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Slides</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
      </ion-content>
    ];
  }
}
