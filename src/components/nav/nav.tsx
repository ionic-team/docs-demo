import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-nav',
  styleUrl: 'nav.css'
})
export class Nav {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Navigation</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>

      </ion-content>
    ];
  }
}
