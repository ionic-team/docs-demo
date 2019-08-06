import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-list-item',
  styleUrl: 'list-item.css'
})
export class ListItem {
  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>List Item</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen>
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
            Color Items
          </ion-list-header>
          <ion-item color="primary">
            <ion-label>Primary</ion-label>
          </ion-item>

          <ion-item color="secondary">
            <ion-label>Secondary</ion-label>
          </ion-item>

          <ion-item color="tertiary">
            <ion-label>Tertiary</ion-label>
          </ion-item>

          <ion-item color="success">
            <ion-label>Success</ion-label>
          </ion-item>

          <ion-item color="warning">
            <ion-label>Warning</ion-label>
          </ion-item>

          <ion-item color="danger">
            <ion-label>Danger</ion-label>
          </ion-item>
        </ion-list>

        <ion-list>
          <ion-list-header>
            Group with Divider
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
            Sliding Item
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
            Notes
          </ion-list-header>

          <ion-item-sliding>
            <ion-item>
              <ion-label>Primary Note</ion-label>
              <ion-note slot="end" color="primary">99</ion-note>
            </ion-item>

            <ion-item>
              <ion-label>Secondary Note</ion-label>
              <ion-note slot="end" color="secondary">99</ion-note>
            </ion-item>

            <ion-item>
              <ion-label>Tertiary Note</ion-label>
              <ion-note slot="end" color="tertiary">99</ion-note>
            </ion-item>

            <ion-item>
              <ion-label>Success Note</ion-label>
              <ion-note slot="end" color="success">99</ion-note>
            </ion-item>

            <ion-item>
              <ion-label>Warning Note</ion-label>
              <ion-note slot="end" color="warning">99</ion-note>
            </ion-item>

            <ion-item>
              <ion-label>Danger Note</ion-label>
              <ion-note slot="end" color="danger">99</ion-note>
            </ion-item>
          </ion-item-sliding>
        </ion-list>
      </ion-content>
    ];
  }
}
