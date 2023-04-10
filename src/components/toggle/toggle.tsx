import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-toggle',
  styleUrl: 'toggle.css'
})
export class Toggle {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Toggle</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-list>
          <ion-item>
            <ion-toggle name="blueberry" checked>Blueberry</ion-toggle>
          </ion-item>

          <ion-item>
            <ion-toggle name="apple" color="secondary" checked>Apple</ion-toggle>
          </ion-item>

          <ion-item>
            <ion-toggle name="grape" color="tertiary" checked>Grape</ion-toggle>
          </ion-item>

          <ion-item>
            <ion-toggle name="kiwi" color="success" checked>Kiwi</ion-toggle>
          </ion-item>

          <ion-item>
            <ion-toggle name="banana" color="warning" checked>Orange</ion-toggle>
          </ion-item>

          <ion-item>
            <ion-toggle name="cherry" color="danger" checked>Cherry</ion-toggle>
          </ion-item>

          <ion-item>
            <ion-toggle name="banana" color="light" checked>Banana</ion-toggle>
          </ion-item>

          <ion-item>
            <ion-toggle name="cantaloupe" color="medium" checked>Cantaloupe</ion-toggle>
          </ion-item>

          <ion-item>
            <ion-toggle name="blackberry" color="dark" checked>Blackberry</ion-toggle>
          </ion-item>
        </ion-list>
      </ion-content>
    ];
  }
}
