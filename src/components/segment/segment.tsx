import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-segment',
  styleUrl: 'segment.css'
})
export class segment {
  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Segment</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen>
        <ion-list-header>Default</ion-list-header>

        <ion-segment>
          <ion-segment-button checked>
            <ion-label>Call</ion-label>
          </ion-segment-button>
          <ion-segment-button>
            <ion-label>Favorite</ion-label>
          </ion-segment-button>
          <ion-segment-button>
            <ion-label>Map</ion-label>
          </ion-segment-button>
        </ion-segment>

        <ion-segment color="secondary">
          <ion-segment-button>
            <ion-icon name="call"></ion-icon>
          </ion-segment-button>
          <ion-segment-button checked>
            <ion-icon name="heart"></ion-icon>
          </ion-segment-button>
          <ion-segment-button>
            <ion-icon name="pin"></ion-icon>
          </ion-segment-button>
        </ion-segment>

        <ion-segment color="tertiary">
          <ion-segment-button>
            <ion-label>Call</ion-label>
            <ion-icon name="call"></ion-icon>
          </ion-segment-button>
          <ion-segment-button checked>
            <ion-label>Favorite</ion-label>
            <ion-icon name="heart"></ion-icon>
          </ion-segment-button>
          <ion-segment-button>
            <ion-label>Map</ion-label>
            <ion-icon name="pin"></ion-icon>
          </ion-segment-button>
        </ion-segment>

        <ion-segment color="success">
          <ion-segment-button checked layout="icon-bottom">
            <ion-icon name="call"></ion-icon>
            <ion-label>Call</ion-label>
          </ion-segment-button>
          <ion-segment-button layout="icon-bottom">
            <ion-icon name="heart"></ion-icon>
            <ion-label>Favorite</ion-label>
          </ion-segment-button>
          <ion-segment-button layout="icon-bottom">
            <ion-icon name="pin"></ion-icon>
            <ion-label>Map</ion-label>
          </ion-segment-button>
        </ion-segment>

        <ion-list-header>Scrollable</ion-list-header>

        <ion-segment color="warning" scrollable>
          <ion-segment-button checked layout="icon-start">
            <ion-label>Call</ion-label>
            <ion-icon name="call"></ion-icon>
          </ion-segment-button>
          <ion-segment-button layout="icon-start">
            <ion-label>Favorite</ion-label>
            <ion-icon name="heart"></ion-icon>
          </ion-segment-button>
          <ion-segment-button layout="icon-start">
            <ion-label>Map</ion-label>
            <ion-icon name="pin"></ion-icon>
          </ion-segment-button>
        </ion-segment>

        <ion-segment color="danger" scrollable>
          <ion-segment-button checked layout="icon-end">
            <ion-icon name="call"></ion-icon>
            <ion-label>Call</ion-label>
          </ion-segment-button>
          <ion-segment-button layout="icon-end">
            <ion-icon name="heart"></ion-icon>
            <ion-label>Favorite</ion-label>
          </ion-segment-button>
          <ion-segment-button layout="icon-end">
            <ion-icon name="pin"></ion-icon>
            <ion-label>Map</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-content>
    ];
  }
}
