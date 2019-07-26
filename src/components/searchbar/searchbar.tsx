import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-searchbar',
  styleUrl: 'searchbar.css'
})
export class searchbar {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Searchbar</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
      </ion-content>
    ];
  }
}
