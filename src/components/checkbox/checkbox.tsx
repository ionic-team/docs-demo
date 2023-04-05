import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-checkbox',
  styleUrl: 'checkbox.css'
})
export class Checkbox {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Checkbox</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-list lines="full">
          <ion-list-header>
            <ion-label>
              Characters
            </ion-label>
          </ion-list-header>
          <ion-item>
            <ion-checkbox color="primary" checked label-placement="end" justify="start">Jon Snow</ion-checkbox>
          </ion-item>
          <ion-item>
            <ion-checkbox color="dark" checked label-placement="end" justify="start">Daenerys Targaryen</ion-checkbox>
          </ion-item>
          <ion-item>
            <ion-checkbox disabled label-placement="end" justify="start">Arya Stark</ion-checkbox>
          </ion-item>
          <ion-item>
            <ion-checkbox color="secondary" label-placement="end" justify="start">Tyrion Lannister</ion-checkbox>
          </ion-item>
          <ion-item>
            <ion-checkbox color="danger" checked label-placement="end" justify="start">Sansa Stark</ion-checkbox>
          </ion-item>
          <ion-item>
            <ion-checkbox color="primary" label-placement="end" justify="start">Khal Drogo</ion-checkbox>
          </ion-item>
          <ion-item>
            <ion-checkbox color="tertiary" checked label-placement="end" justify="start">Cersei Lannister</ion-checkbox>
          </ion-item>
          <ion-item>
            <ion-checkbox color="medium" checked label-placement="end" justify="start">Stannis Baratheon</ion-checkbox>
          </ion-item>
          <ion-item>
            <ion-checkbox color="primary" disabled label-placement="end" justify="start">Petyr Baelish</ion-checkbox>
          </ion-item>
          <ion-item>
            <ion-checkbox color="dark" checked label-placement="end" justify="start">Hodor</ion-checkbox>
          </ion-item>
          <ion-item>
            <ion-checkbox color="secondary" checked label-placement="end" justify="start">Catelyn Stark</ion-checkbox>
          </ion-item>
          <ion-item>
            <ion-checkbox color="primary" label-placement="end" justify="start">Bronn</ion-checkbox>
          </ion-item>
        </ion-list>
      </ion-content>
    ];
  }
}
