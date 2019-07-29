import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-tabs-movies',
  styleUrl: 'tabs.css'
})
export class TabsMovies {
  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Movies</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen class="ion-padding">
        <h1>Movies</h1>
      </ion-content>
    ];
  }
}
