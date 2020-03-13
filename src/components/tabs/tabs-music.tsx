import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-tabs-music',
  styleUrl: 'tabs.css'
})
export class TabsMusic {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-title>Music</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen class="ion-padding">
        <h1>Music</h1>
      </ion-content>
    ];
  }
}
