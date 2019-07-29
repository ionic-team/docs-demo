import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-tabs',
  styleUrl: 'tabs.css'
})
export class tabs {
  render() {
    return [
    <ion-tabs>
      <ion-tab tab="tabs-music" component="component-tabs-music" />
      <ion-tab tab="tabs-movies" component="component-tabs-movies" />
      <ion-tab tab="tabs-games" component="component-tabs-games" />

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tabs-music">
          <ion-label>Music</ion-label>
          <ion-icon name="musical-note"></ion-icon>
        </ion-tab-button>
        <ion-tab-button tab="tabs-movies">
          <ion-label>Movies</ion-label>
          <ion-icon name="videocam"></ion-icon>
        </ion-tab-button>
        <ion-tab-button tab="tabs-games">
          <ion-label>Games</ion-label>
          <ion-icon name="logo-game-controller-b"></ion-icon>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
    ];
  }
}
