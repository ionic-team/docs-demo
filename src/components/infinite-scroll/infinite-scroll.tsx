import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-infinite-scroll',
  styleUrl: 'infinite-scroll.css'
})
export class InfiniteScroll {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Infinite Scroll</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
      </ion-content>
    ];
  }
}
