import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-icons',
  styleUrl: 'icons.css'
})
export class icons {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Icons</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true} class="ion-padding ion-text-center">
        <ion-icon name="logo-ionic" color="primary"></ion-icon>
        <ion-icon name="logo-pwa"></ion-icon>
        <ion-icon name="heart" color="danger"></ion-icon>
        <ion-icon name="logo-ionitron" color="primary"></ion-icon>

        <ion-icon name="happy" color="warning"></ion-icon>
        <ion-icon name="finger-print"></ion-icon>
        <ion-icon name="person" color="tertiary"></ion-icon>
        <ion-icon name="people-circle"></ion-icon>

        <ion-icon name="apps"></ion-icon>
        <ion-icon name="lock-closed"></ion-icon>
        <ion-icon name="key" color="success"></ion-icon>
        <ion-icon name="attach"></ion-icon>

        <ion-icon name="map" color="secondary"></ion-icon>
        <ion-icon name="navigate"></ion-icon>
        <ion-icon name="pin"></ion-icon>
        <ion-icon name="locate"></ion-icon>

        <ion-icon name="mic"></ion-icon>
        <ion-icon name="volume-high" color="danger"></ion-icon>
        <ion-icon name="musical-notes"></ion-icon>
        <ion-icon name="radio" color="primary"></ion-icon>

        <ion-icon name="cafe" color="success"></ion-icon>
        <ion-icon name="calculator"></ion-icon>
        <ion-icon name="bus" color="warning"></ion-icon>
        <ion-icon name="wine"></ion-icon>

        <ion-icon name="camera"></ion-icon>
        <ion-icon name="star" color="tertiary"></ion-icon>
        <ion-icon name="image"></ion-icon>
        <ion-icon name="pin" color="secondary"></ion-icon>

        <ion-icon name="arrow-up-circle" color="warning"></ion-icon>
        <ion-icon name="arrow-undo"></ion-icon>
        <ion-icon name="chevron-down"></ion-icon>
        <ion-icon name="play-circle"></ion-icon>

        <ion-icon name="cloud"></ion-icon>
        <ion-icon name="sunny" color="success"></ion-icon>
        <ion-icon name="umbrella"></ion-icon>
        <ion-icon name="rainy"></ion-icon>

        <ion-icon name="game-controller" color="danger"></ion-icon>
        <ion-icon name="alarm"></ion-icon>
        <ion-icon name="barbell"></ion-icon>
        <ion-icon name="earth" color="primary"></ion-icon>
      </ion-content>
    ];
  }
}
