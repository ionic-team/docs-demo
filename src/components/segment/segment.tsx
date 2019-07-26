import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-segment',
  styleUrl: 'segment.css'
})
export class segment {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Segment</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
      </ion-content>
    ];
  }
}
