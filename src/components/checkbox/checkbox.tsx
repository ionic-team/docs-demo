import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-checkbox',
  styleUrl: 'checkbox.css'
})
export class checkbox {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Checkbox</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-list>
          <ion-list-header>Characters</ion-list-header>
          <ion-item>
            <ion-label>Jon Snow</ion-label>
            <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
          </ion-item>
          <ion-item>
            <ion-checkbox color="dark" checked slot="start"></ion-checkbox>
            <ion-label>Daenerys Targaryen</ion-label>
          </ion-item>
          <ion-item>
            <ion-checkbox disabled slot="start"></ion-checkbox>
            <ion-label>Arya Stark</ion-label>
          </ion-item>
          <ion-item>
            <ion-checkbox color="secondary" slot="start"></ion-checkbox>
            <ion-label>Tyrion Lannister</ion-label>
          </ion-item>
          <ion-item>
            <ion-checkbox color="danger" checked slot="start"></ion-checkbox>
            <ion-label>Sansa Stark</ion-label>
          </ion-item>
          <ion-item>
            <ion-checkbox color="primary" slot="start"></ion-checkbox>
            <ion-label>Khal Drogo</ion-label>
          </ion-item>
          <ion-item>
            <ion-checkbox color="tertiary" checked slot="start"></ion-checkbox>
            <ion-label>Cersei Lannister</ion-label>
          </ion-item>
          <ion-item>
            <ion-checkbox color="medium" checked slot="start"></ion-checkbox>
            <ion-label>Stannis Baratheon</ion-label>
          </ion-item>
          <ion-item>
            <ion-checkbox color="primary" disabled slot="start"></ion-checkbox>
            <ion-label>Petyr Baelish</ion-label>
          </ion-item>
          <ion-item>
            <ion-checkbox color="dark" checked slot="start"></ion-checkbox>
            <ion-label>Hodor</ion-label>
          </ion-item>
          <ion-item>
            <ion-checkbox color="secondary" checked slot="start"></ion-checkbox>
            <ion-label>Catelyn Stark</ion-label>
          </ion-item>
          <ion-item>
            <ion-checkbox color="primary" slot="start"></ion-checkbox>
            <ion-label>Bronn</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    ];
  }
}
