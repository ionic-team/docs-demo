import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-radio',
  styleUrl: 'radio.css'
})
export class Radio {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Radio</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-list>
          <ion-radio-group value="grape">
            <ion-list-header>
              <ion-label>Fruit</ion-label>
            </ion-list-header>
            <ion-item>
              <ion-radio label-placement="end" justify="start" color="success" value="apple">Apple</ion-radio>
            </ion-item>

            <ion-item>
              <ion-radio label-placement="end" justify="start" color="tertiary" value="grape">Grape</ion-radio>
            </ion-item>

            <ion-item>
              <ion-radio label-placement="end" justify="start" color="danger" value="cherry">Cherry</ion-radio>
            </ion-item>
          </ion-radio-group>

          <ion-radio-group value="anchovies" allow-empty-selection>
            <ion-list-header>
              <ion-label>Pizza Topping</ion-label>
            </ion-list-header>
            <ion-item>
              <ion-radio color="primary" value="beef">Beef</ion-radio>
            </ion-item>

            <ion-item>
              <ion-radio color="secondary" value="anchovies">Anchovies</ion-radio>
            </ion-item>

            <ion-item>
              <ion-radio color="tertiary" value="sausage">Sausage</ion-radio>
            </ion-item>

            <ion-item>
              <ion-radio color="success" value="tomato">Bellpepper</ion-radio>
            </ion-item>

            <ion-item>
              <ion-radio color="warning" value="carrot">Tomato</ion-radio>
            </ion-item>

            <ion-item>
              <ion-radio color="danger" value="pepperoni">Pepperoni</ion-radio>
            </ion-item>
          </ion-radio-group>
        </ion-list>
      </ion-content>
    ];
  }
}
