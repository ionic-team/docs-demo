import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-tabs',
  styleUrl: 'tabs.css'
})
export class tabs {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Tabs</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
      </ion-content>
    ];
  }
}
