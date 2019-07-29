import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-thumbnail',
  styleUrl: 'thumbnail.css'
})
export class thumbnail {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Thumbnail</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-list-header>Default</ion-list-header>
        <ion-thumbnail class="ion-margin-start">
          <img src="/assets/thumbnail.svg" />
        </ion-thumbnail>

        <ion-list>
          <ion-list-header>Item thumbnails</ion-list-header>
          <ion-item>
            <ion-thumbnail slot="start">
              <img src="/assets/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>Lorem ipsum</ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="start">
              <img src="/assets/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="start">
              <img src="/assets/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet</p>
              <p>consectetur adipiscing elit. Duis ut urna neque.</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="end">
              <img src="/assets/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>Lorem ipsum</ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="end">
              <img src="/assets/thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>
              <h3>Lorem ipsum</h3>
              <p>dolor sit amet</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="end">
              <img src="/assets/thumbnail.svg" />
            </ion-thumbnail>
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
