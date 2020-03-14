import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-badge',
  styleUrl: 'badge.css'
})
export class Badge {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Badge</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-list>
          <ion-list-header>Badges</ion-list-header>
          <ion-item>
            <ion-label>Followers</ion-label>
            <ion-badge slot="end">22k</ion-badge>
          </ion-item>
          <ion-item>
            <ion-label>Likes</ion-label>
            <ion-badge color="secondary" slot="end">118k</ion-badge>
          </ion-item>
          <ion-item>
            <ion-label>Stars</ion-label>
            <ion-badge color="tertiary" slot="end">34k</ion-badge>
          </ion-item>
          <ion-item>
            <ion-label>Completed</ion-label>
            <ion-badge color="success" slot="end">80</ion-badge>
          </ion-item>
          <ion-item>
            <ion-label>Warnings</ion-label>
            <ion-badge color="warning" slot="end">70</ion-badge>
          </ion-item>
          <ion-item>
            <ion-label>Notifications</ion-label>
            <ion-badge color="danger" slot="end">1000</ion-badge>
          </ion-item>
          <ion-item>
            <ion-label>Unread</ion-label>
            <ion-badge color="light" slot="end">24</ion-badge>
          </ion-item>
          <ion-item>
            <ion-label>Drafts</ion-label>
            <ion-badge color="medium" slot="end">14</ion-badge>
          </ion-item>
          <ion-item lines="full">
            <ion-label>Deleted</ion-label>
            <ion-badge color="dark" slot="end">4</ion-badge>
          </ion-item>
        </ion-list>

        <ion-tab-bar>
          <ion-tab-button selected>
            <ion-icon name="globe"></ion-icon>
            <ion-badge color="tertiary">44</ion-badge>
          </ion-tab-button>
          <ion-tab-button>
            <ion-icon name="people"></ion-icon>
            <ion-badge color="success">1</ion-badge>
          </ion-tab-button>
          <ion-tab-button>
            <ion-icon name="mail"></ion-icon>
            <ion-badge>2.3k</ion-badge>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-content>
    ];
  }
}
