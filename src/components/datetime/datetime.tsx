import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-datetime',
  styleUrl: 'datetime.css'
})
export class datetime {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Datetime</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
      </ion-content>
    ];
  }
}
