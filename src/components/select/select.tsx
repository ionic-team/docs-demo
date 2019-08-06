import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-select',
  styleUrl: 'select.css'
})
export class select {
  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Select</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen>
      </ion-content>
    ];
  }
}
