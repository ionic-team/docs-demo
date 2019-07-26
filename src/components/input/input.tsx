import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-input',
  styleUrl: 'input.css'
})
export class input {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Input</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
      </ion-content>
    ];
  }
}
