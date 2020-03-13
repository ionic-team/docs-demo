import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-tabs-games',
  styleUrl: 'tabs.css'
})
export class TabsGames {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Games</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen class="ion-padding">
        <h1>Games</h1>
      </ion-content>
    ];
  }
}
