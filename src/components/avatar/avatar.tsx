import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-avatar',
  styleUrl: 'avatar.css'
})
export class avatar {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Avatar</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-list-header>Default</ion-list-header>
        <ion-avatar class="ion-margin-start">
          <img src="/assets/avatar.svg" />
        </ion-avatar>

        <ion-list-header>Chip Avatar</ion-list-header>
        <ion-chip class="ion-margin-start">
          <ion-avatar>
            <img src="/assets/avatar.svg" />
          </ion-avatar>
          <ion-label>Kit Bishop</ion-label>
        </ion-chip>

        <ion-list>
          <ion-list-header>Item Avatars</ion-list-header>
          <ion-item>
            <ion-avatar slot="start">
              <img src="/assets/avatar.svg" />
            </ion-avatar>
            <ion-label>Lorem ipsum</ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img src="/assets/avatar.svg" />
            </ion-avatar>
            <ion-label>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img src="/assets/avatar.svg" />
            </ion-avatar>
            <ion-label>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet</p>
              <p>consectetur adipiscing elit. Duis ut urna neque.</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="end">
              <img src="/assets/avatar.svg" />
            </ion-avatar>
            <ion-label>Lorem ipsum</ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="end">
              <img src="/assets/avatar.svg" />
            </ion-avatar>
            <ion-label>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="end">
              <img src="/assets/avatar.svg" />
            </ion-avatar>
            <ion-label>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet</p>
              <p>consectetur adipiscing elit. Duis ut urna neque.</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    ];
  }
}
