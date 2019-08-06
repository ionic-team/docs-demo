import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-toggle',
  styleUrl: 'toggle.css'
})
export class toggle {
  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Toggle</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen>
        <ion-list>
          <ion-item>
            <ion-label>Blueberry</ion-label>
            <ion-toggle slot="start" name="blueberry" checked></ion-toggle>
          </ion-item>

          <ion-item>
            <ion-label>Apple</ion-label>
            <ion-toggle slot="start" name="apple" color="secondary" checked></ion-toggle>
          </ion-item>

          <ion-item>
            <ion-label>Grape</ion-label>
            <ion-toggle slot="start" name="grape" color="tertiary" checked></ion-toggle>
          </ion-item>

          <ion-item>
            <ion-label>Kiwi</ion-label>
            <ion-toggle slot="start" name="kiwi" color="success" checked></ion-toggle>
          </ion-item>

          <ion-item>
            <ion-label>Orange</ion-label>
            <ion-toggle slot="start" name="banana" color="warning" checked></ion-toggle>
          </ion-item>

          <ion-item>
            <ion-label>Cherry</ion-label>
            <ion-toggle slot="start" name="cherry" color="danger" checked></ion-toggle>
          </ion-item>

          <ion-item>
            <ion-label>Banana</ion-label>
            <ion-toggle slot="start" name="banana" color="light" checked></ion-toggle>
          </ion-item>

          <ion-item>
            <ion-label>Cantaloupe</ion-label>
            <ion-toggle slot="start" name="cantaloupe" color="medium" checked></ion-toggle>
          </ion-item>

          <ion-item>
            <ion-label>Blackberry</ion-label>
            <ion-toggle slot="start" name="blackberry" color="dark" checked></ion-toggle>
          </ion-item>
        </ion-list>
      </ion-content>
    ];
  }
}
