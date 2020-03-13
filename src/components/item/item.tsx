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
          <ion-list-header>
            Items with Labels
          </ion-list-header>
          <ion-item>
            <ion-label>Label</ion-label>
          </ion-item>

          <ion-item>
            <ion-icon slot="end" name="logo-ionic"></ion-icon>
            <ion-label>Label with Icon</ion-label>
          </ion-item>
        </ion-list>

        <ion-list>
          <ion-list-header>
            Item Groups
          </ion-list-header>

          <ion-item-group>
            <ion-item-divider>
              <ion-label>A</ion-label>
            </ion-item-divider>

            <ion-item>
              <ion-label>Adam</ion-label>
            </ion-item>

            <ion-item lines="none">
              <ion-label>Alan</ion-label>
            </ion-item>

            <ion-item-divider>
              <ion-label>B</ion-label>
            </ion-item-divider>

            <ion-item lines="none">
              <ion-label>Brianna</ion-label>
            </ion-item>

            <ion-item-divider>
              <ion-label>C</ion-label>
            </ion-item-divider>

            <ion-item lines="none">
              <ion-label>Carla</ion-label>
            </ion-item>
          </ion-item-group>
        </ion-list>

        <ion-list>
          <ion-list-header>
            Sliding Items
          </ion-list-header>

          <ion-item-sliding>
            <ion-item>
              <ion-label>New Message</ion-label>
            </ion-item>

            <ion-item-options side="start">
              <ion-item-option color="primary">Mark Unread</ion-item-option>
            </ion-item-options>

            <ion-item-options side="end">
              <ion-item-option color="danger">Delete</ion-item-option>
            </ion-item-options>
          </ion-item-sliding>

          <ion-item-sliding>
            <ion-item>
              <ion-label>New Message</ion-label>
            </ion-item>

            <ion-item-options side="start">
              <ion-item-option color="primary">Mark Unread</ion-item-option>
            </ion-item-options>

            <ion-item-options side="end">
              <ion-item-option color="danger">Delete</ion-item-option>
            </ion-item-options>
          </ion-item-sliding>
        </ion-list>

        <ion-list>
          <ion-list-header>
            Inputs & Controls
          </ion-list-header>

          <ion-item-sliding>
            <ion-item>
              <ion-label>Item Note</ion-label>
              <ion-note slot="end">99</ion-note>
            </ion-item>

            <ion-item>
              <ion-label>Item Checkbox</ion-label>
              <ion-checkbox slot="end" checked></ion-checkbox>
            </ion-item>

            <ion-item>
              <ion-label>Item Toggle</ion-label>
              <ion-toggle slot="end" checked></ion-toggle>
            </ion-item>

          </ion-item-sliding>
        </ion-list>
      </ion-content>
    ];
  }
}
