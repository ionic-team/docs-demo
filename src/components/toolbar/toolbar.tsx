import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-toolbar',
  styleUrl: 'toolbar.css'
})
export class toolbar {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-buttons slot="secondary">
            <ion-button>
              <ion-icon slot="icon-only" name="logo-ionic"></ion-icon>
            </ion-button>
          </ion-buttons>

          <ion-title>Toolbar</ion-title>

          <ion-buttons slot="primary">
            <ion-button>
              <ion-icon slot="icon-only" name="star"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-toolbar>
          <ion-title>Default</ion-title>
        </ion-toolbar>

        <ion-toolbar color="primary">
          <ion-title>Primary</ion-title>
        </ion-toolbar>

        <ion-toolbar color="secondary">
          <ion-title>Secondary</ion-title>
        </ion-toolbar>

        <ion-toolbar color="tertiary">
          <ion-title>Tertiary</ion-title>
        </ion-toolbar>

        <ion-toolbar color="success">
          <ion-title>Success</ion-title>
        </ion-toolbar>

        <ion-toolbar color="warning">
          <ion-title>Warning</ion-title>
        </ion-toolbar>

        <ion-toolbar color="danger">
          <ion-title>Danger</ion-title>
        </ion-toolbar>

        <ion-toolbar>
          <ion-buttons slot="secondary">
            <ion-button>Messages (1)</ion-button>
          </ion-buttons>

          <ion-title>Buttons</ion-title>

          <ion-buttons slot="primary">
            <ion-button>Log Out</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-content>,

      <ion-footer>
        <ion-toolbar>
          <ion-buttons slot="secondary">
            <ion-button>
              <ion-icon slot="icon-only" name="finger-print"></ion-icon>
            </ion-button>
          </ion-buttons>

          <ion-title>Footer</ion-title>

          <ion-buttons slot="primary">
            <ion-button>
              <ion-icon slot="icon-only" name="more"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-footer>
    ];
  }
}
