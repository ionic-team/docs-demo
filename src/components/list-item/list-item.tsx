import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-list-item',
  styleUrl: 'list-item.css'
})
export class ListItem {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>List Item</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
      </ion-content>
    ];
  }
}
