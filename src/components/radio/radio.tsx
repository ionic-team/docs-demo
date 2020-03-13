import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-radio',
  styleUrl: 'radio.css'
})
export class radio {
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
              <ion-label>Apple</ion-label>
              <ion-radio slot="start" color="success" value="apple"></ion-radio>
            </ion-item>

            <ion-item>
              <ion-label>Grape</ion-label>
              <ion-radio slot="start" color="tertiary" value="grape"></ion-radio>
            </ion-item>

            <ion-item>
              <ion-label>Cherry</ion-label>
              <ion-radio slot="start" color="danger" value="cherry"></ion-radio>
            </ion-item>
          </ion-radio-group>

          <ion-radio-group value="anchovies" allow-empty-selection>
            <ion-list-header>
              <ion-label>Pizza Topping</ion-label>
            </ion-list-header>
            <ion-item>
              <ion-label>Beef</ion-label>
              <ion-radio slot="end" color="primary" value="beef"></ion-radio>
            </ion-item>

            <ion-item>
              <ion-label>Anchovies</ion-label>
              <ion-radio slot="end" color="secondary" value="anchovies"></ion-radio>
            </ion-item>

            <ion-item>
              <ion-label>Sausage</ion-label>
              <ion-radio slot="end" color="tertiary" value="sausage"></ion-radio>
            </ion-item>

            <ion-item>
              <ion-label>Bellpepper</ion-label>
              <ion-radio slot="end" color="success" value="tomato"></ion-radio>
            </ion-item>

            <ion-item>
              <ion-label>Tomato</ion-label>
              <ion-radio slot="end" color="warning" value="carrot"></ion-radio>
            </ion-item>

            <ion-item>
              <ion-label>Pepperoni</ion-label>
              <ion-radio slot="end" color="danger" value="pepperoni"></ion-radio>
            </ion-item>
          </ion-radio-group>
        </ion-list>
      </ion-content>
    ];
  }
}
