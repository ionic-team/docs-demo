import { Component, h } from '@stencil/core';

import { getMode } from '@ionic/core';

@Component({
  tag: 'component-segment',
  styleUrl: 'segment.css'
})
export class Segment {
  // In iOS the segment is in the first toolbar,
  // in Android it is in the last toolbar
  renderToolbars() {
    const mode = getMode();

    if (mode === 'ios') {
      return [
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-segment value="all">
            <ion-segment-button value="all">All</ion-segment-button>
            <ion-segment-button value="favorites">Favorites</ion-segment-button>
          </ion-segment>
        </ion-toolbar>,
        <ion-toolbar>
          <ion-title>Segment</ion-title>
        </ion-toolbar>
      ];
    }

    return [
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Segment</ion-title>
      </ion-toolbar>,
      <ion-toolbar>
        <ion-segment value="all">
          <ion-segment-button value="all">All</ion-segment-button>
          <ion-segment-button value="favorites">Favorites</ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    ];
  }

  render() {
    return [
      <ion-header translucent={true}>
        { this.renderToolbars() }
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-list-header>
          <ion-label>
            Colors
          </ion-label>
        </ion-list-header>

        <div class="ion-padding-horizontal">
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

          <ion-segment value="favorite" color="secondary">
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

          <ion-segment value="map" color="tertiary">
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

          <ion-segment value="favorite" color="warning">
            <ion-segment-button value="call" layout="icon-start">
              <ion-icon name="call"></ion-icon>
              <ion-label>Call</ion-label>
            </ion-segment-button>
            <ion-segment-button value="favorite" layout="icon-start">
              <ion-icon name="heart"></ion-icon>
              <ion-label>Favorite</ion-label>
            </ion-segment-button>
            <ion-segment-button value="map" layout="icon-start">
              <ion-icon name="pin"></ion-icon>
              <ion-label>Map</ion-label>
            </ion-segment-button>
          </ion-segment>

          <ion-segment value="map" color="danger">
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
        </div>

        <ion-list-header>
          <ion-label>
            Scrollable
          </ion-label>
        </ion-list-header>

        <div class="ion-padding-horizontal">
          <ion-segment value="call" scrollable>
            <ion-segment-button value="call">
              <ion-label>Call</ion-label>
            </ion-segment-button>
            <ion-segment-button value="favorite">
              <ion-label>Favorite</ion-label>
            </ion-segment-button>
            <ion-segment-button value="map">
              <ion-label>Map</ion-label>
            </ion-segment-button>
            <ion-segment-button value="watch">
              <ion-label>Watch</ion-label>
            </ion-segment-button>
            <ion-segment-button value="account">
              <ion-label>Account</ion-label>
            </ion-segment-button>
            <ion-segment-button value="settings">
              <ion-label>Settings</ion-label>
            </ion-segment-button>
            <ion-segment-button value="profile">
              <ion-label>Profile</ion-label>
            </ion-segment-button>
          </ion-segment>

          <ion-segment value="favorite" color="tertiary" scrollable>
            <ion-segment-button value="call">
              <ion-icon name="call"></ion-icon>
            </ion-segment-button>
            <ion-segment-button value="favorite">
              <ion-icon name="heart"></ion-icon>
            </ion-segment-button>
            <ion-segment-button value="map">
              <ion-icon name="pin"></ion-icon>
            </ion-segment-button>
            <ion-segment-button value="watch">
              <ion-icon name="play-circle-outline"></ion-icon>
            </ion-segment-button>
            <ion-segment-button value="account">
              <ion-icon name="people"></ion-icon>
            </ion-segment-button>
            <ion-segment-button value="settings">
              <ion-icon name="cog"></ion-icon>
            </ion-segment-button>
            <ion-segment-button value="profile">
              <ion-icon name="person"></ion-icon>
            </ion-segment-button>
          </ion-segment>
        </div>
      </ion-content>
    ];
  }
}
