import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-routing',
  styleUrl: 'routing.css'
})
export class routing {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Routing</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
      </ion-content>
    ];
  }
}
