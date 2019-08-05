import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-spinner',
  styleUrl: 'spinner.css'
})
export class spinner {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Spinner</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
      </ion-content>
    ];
  }
}
