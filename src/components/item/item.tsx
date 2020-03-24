import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-item',
  styleUrl: 'item.css'
})
export class Item {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Item</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-list>
          <ion-list-header lines="full">
            <ion-label>
              Icon Items
            </ion-label>
          </ion-list-header>

          <ion-item>
            <ion-icon slot="start" ios="star-outline" md="star-sharp"></ion-icon>
            <ion-label>Label</ion-label>
          </ion-item>

          <ion-item lines="full">
            <ion-icon slot="start" ios="heart-outline" md="heart-sharp"></ion-icon>
            <ion-label>Label</ion-label>
          </ion-item>
        </ion-list>

        <ion-list>
          <ion-list-header lines="full">
            <ion-label>
              Media Items
            </ion-label>
          </ion-list-header>

          <ion-item>
            <ion-avatar slot="start">
              <img src="/assets/avatar.svg"/>
            </ion-avatar>
            <ion-label>Label</ion-label>
          </ion-item>

          <ion-item lines="full">
            <ion-avatar slot="start">
              <img src="/assets/avatar.svg"/>
            </ion-avatar>
            <ion-label>Label</ion-label>
          </ion-item>
        </ion-list>

        <ion-list>
          <ion-list-header>
            <ion-label>
              Sliding Items
            </ion-label>
          </ion-list-header>

          <ion-item-sliding>
            <ion-item>
              <ion-label>Label</ion-label>
            </ion-item>

            <ion-item-options side="start">
              <ion-item-option color="primary">Archive</ion-item-option>
            </ion-item-options>

            <ion-item-options side="end">
              <ion-item-option expandable color="danger">Delete</ion-item-option>
            </ion-item-options>
          </ion-item-sliding>

          <ion-item-sliding>
            <ion-item>
              <ion-label>Label</ion-label>
            </ion-item>

            <ion-item-options side="start">
              <ion-item-option color="primary">
                <ion-icon slot="icon-only" ios="share-outline" md="share-sharp"></ion-icon>
              </ion-item-option>
            </ion-item-options>

            <ion-item-options side="end">
              <ion-item-option expandable color="danger">
                <ion-icon slot="icon-only" ios="trash-outline" md="trash-sharp"></ion-icon>
              </ion-item-option>
            </ion-item-options>
          </ion-item-sliding>
        </ion-list>

        <ion-list>
          <ion-list-header>
            <ion-label>
              Inputs & Controls
            </ion-label>
          </ion-list-header>

          <ion-item-sliding>
            <ion-item>
              <ion-label>Note</ion-label>
              <ion-note slot="end">99</ion-note>
            </ion-item>

            <ion-item>
              <ion-label>Checkbox</ion-label>
              <ion-checkbox slot="end" checked></ion-checkbox>
            </ion-item>

            <ion-item>
              <ion-label>Toggle</ion-label>
              <ion-toggle slot="end" checked></ion-toggle>
            </ion-item>

            <ion-item>
              <ion-label>Input</ion-label>
              <ion-input slot="end" placeholder="Placeholder"></ion-input>
            </ion-item>

          </ion-item-sliding>
        </ion-list>
      </ion-content>
    ];
  }
}
