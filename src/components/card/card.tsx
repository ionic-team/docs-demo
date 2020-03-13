import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-card',
  styleUrl: 'card.css'
})
export class card {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Card</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-card>
          <img src="/assets/madison.jpg" />
          <ion-card-header>
            <ion-card-subtitle>Destination</ion-card-subtitle>
            <ion-card-title>Madison, WI</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
          </ion-card-content>
        </ion-card>
      </ion-content>
    ];
  }
}
