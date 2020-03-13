import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-segment',
  styleUrl: 'segment.css'
})
export class segment {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Segment</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-list-header>Default</ion-list-header>

        <ion-segment value="call">
          <ion-segment-button value="call">
            <ion-label>Call</ion-label>
          </ion-segment-button>
          <ion-segment-button value="favorite">
            <ion-label>Favorite</ion-label>
          </ion-segment-button>
          <ion-segment-button value="map">
            <ion-label>Map</ion-label>
          </ion-segment-button>
        </ion-segment>

        <ion-segment value="heart" color="secondary">
          <ion-segment-button value="call">
            <ion-icon name="call"></ion-icon>
          </ion-segment-button>
          <ion-segment-button value="favorite">
            <ion-icon name="heart"></ion-icon>
          </ion-segment-button>
          <ion-segment-button value="map">
            <ion-icon name="pin"></ion-icon>
          </ion-segment-button>
        </ion-segment>

        <ion-segment value="heart" color="tertiary">
          <ion-segment-button value="call">
            <ion-label>Call</ion-label>
            <ion-icon name="call"></ion-icon>
          </ion-segment-button>
          <ion-segment-button value="favorite">
            <ion-label>Favorite</ion-label>
            <ion-icon name="heart"></ion-icon>
          </ion-segment-button>
          <ion-segment-button value="map">
            <ion-label>Map</ion-label>
            <ion-icon name="pin"></ion-icon>
          </ion-segment-button>
        </ion-segment>

        <ion-segment value="call" color="success">
          <ion-segment-button value="call" layout="icon-bottom">
            <ion-icon name="call"></ion-icon>
            <ion-label>Call</ion-label>
          </ion-segment-button>
          <ion-segment-button value="favorite" layout="icon-bottom">
            <ion-icon name="heart"></ion-icon>
            <ion-label>Favorite</ion-label>
          </ion-segment-button>
          <ion-segment-button value="map" layout="icon-bottom">
            <ion-icon name="pin"></ion-icon>
            <ion-label>Map</ion-label>
          </ion-segment-button>
        </ion-segment>

        <ion-list-header>Scrollable</ion-list-header>

        <ion-segment value="call" color="warning" scrollable>
          <ion-segment-button value="call" layout="icon-start">
            <ion-label>Call</ion-label>
            <ion-icon name="call"></ion-icon>
          </ion-segment-button>
          <ion-segment-button value="favorite" layout="icon-start">
            <ion-label>Favorite</ion-label>
            <ion-icon name="heart"></ion-icon>
          </ion-segment-button>
          <ion-segment-button value="map" layout="icon-start">
            <ion-label>Map</ion-label>
            <ion-icon name="pin"></ion-icon>
          </ion-segment-button>
        </ion-segment>

        <ion-segment value="call" color="danger" scrollable>
          <ion-segment-button value="call" layout="icon-end">
            <ion-icon name="call"></ion-icon>
            <ion-label>Call</ion-label>
          </ion-segment-button>
          <ion-segment-button value="favorite" layout="icon-end">
            <ion-icon name="heart"></ion-icon>
            <ion-label>Favorite</ion-label>
          </ion-segment-button>
          <ion-segment-button value="map" layout="icon-end">
            <ion-icon name="pin"></ion-icon>
            <ion-label>Map</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-content>
    ];
  }
}
