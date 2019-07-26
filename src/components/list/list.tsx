import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-list',
  styleUrl: 'list.css'
})
export class list {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>List</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
      </ion-content>
    ];
  }
}
