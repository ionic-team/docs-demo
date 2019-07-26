import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-chip',
  styleUrl: 'chip.css'
})
export class chip {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Chip</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-list-header>Basic</ion-list-header>
        <p>
          <ion-chip>
            <ion-label>Default</ion-label>
          </ion-chip>
          <ion-chip>
            <ion-icon name="checkmark-circle"></ion-icon>
            <ion-label>Icon</ion-label>
          </ion-chip>
          <ion-chip>
            <ion-avatar>
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjYzVkYmZmIiBkPSJNMCAwaDUxMnY1MTJIMHoiLz48cGF0aCBkPSJNMjU2IDMwNGM2MS42IDAgMTEyLTUwLjQgMTEyLTExMlMzMTcuNiA4MCAyNTYgODBzLTExMiA1MC40LTExMiAxMTIgNTAuNCAxMTIgMTEyIDExMnptMCA0MGMtNzQuMiAwLTIyNCAzNy44LTIyNCAxMTJ2NTZoNDQ4di01NmMwLTc0LjItMTQ5LjgtMTEyLTIyNC0xMTJ6IiBmaWxsPSIjODJhZWZmIi8+PC9zdmc+" />
            </ion-avatar>
            <ion-label>Avatar</ion-label>
          </ion-chip>
        </p>

        <ion-list-header>Colors</ion-list-header>
        <p>
          <ion-chip color="primary">
            <ion-label>Primary</ion-label>
          </ion-chip>
          <ion-chip color="secondary">
            <ion-label>Secondary</ion-label>
          </ion-chip>
          <ion-chip color="tertiary">
            <ion-label>Tertiary</ion-label>
          </ion-chip>
          <ion-chip color="success">
            <ion-label>Success</ion-label>
          </ion-chip>
          <ion-chip color="warning">
            <ion-label>Warning</ion-label>
          </ion-chip>
          <ion-chip color="danger">
            <ion-label>Danger</ion-label>
          </ion-chip>
        </p>

        <ion-list-header>Outline</ion-list-header>
        <p>
          <ion-chip outline color="primary">
            <ion-label>Primary</ion-label>
          </ion-chip>
          <ion-chip outline color="secondary">
            <ion-label>Secondary</ion-label>
          </ion-chip>
          <ion-chip outline color="tertiary">
            <ion-label>Tertiary</ion-label>
          </ion-chip>
          <ion-chip outline color="success">
            <ion-label>Success</ion-label>
          </ion-chip>
          <ion-chip outline color="warning">
            <ion-label>Warning</ion-label>
          </ion-chip>
          <ion-chip outline color="danger">
            <ion-label>Danger</ion-label>
          </ion-chip>
        </p>

        <ion-list-header>Icons</ion-list-header>
        <p>
          <ion-chip outline color="primary">
            <ion-icon name="pin"></ion-icon>
            <ion-label>Madison</ion-label>
            <ion-icon name="close-circle"></ion-icon>
          </ion-chip>
          <ion-chip outline color="secondary">
            <ion-icon name="wine"></ion-icon>
            <ion-label>Nightlife</ion-label>
            <ion-icon name="close-circle"></ion-icon>
          </ion-chip>
          <ion-chip outline color="tertiary">
            <ion-icon name="restaurant"></ion-icon>
            <ion-label>Dining</ion-label>
            <ion-icon name="close-circle"></ion-icon>
          </ion-chip>
          <ion-chip outline color="dark">
            <ion-icon name="videocam"></ion-icon>
            <ion-label>Entertainment</ion-label>
            <ion-icon name="close-circle"></ion-icon>
          </ion-chip>
        </p>
      </ion-content>
    ];
  }
}
