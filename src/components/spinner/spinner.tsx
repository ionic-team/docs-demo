import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-spinner',
  styleUrl: 'spinner.css'
})
export class spinner {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Spinner</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-item>
          <ion-spinner slot="start"></ion-spinner>
          <ion-label>
            Default Spinner
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-spinner slot="start" name="lines"></ion-spinner>
          <ion-label>
            Lines
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-spinner slot="start" name="lines-small"></ion-spinner>
          <ion-label>
            Lines Small
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-spinner slot="start" name="dots"></ion-spinner>
          <ion-label>
            Dots
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-spinner slot="start" name="bubbles"></ion-spinner>
          <ion-label>
            Bubbles
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-spinner slot="start" name="circles"></ion-spinner>
          <ion-label>
            Circles
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-spinner slot="start" name="crescent"></ion-spinner>
          <ion-label>
            Crescent
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-spinner slot="start" paused></ion-spinner>
          <ion-label>
            Paused Spinner
          </ion-label>
        </ion-item>

      </ion-content>
    ];
  }
}
