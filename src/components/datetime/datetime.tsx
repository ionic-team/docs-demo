import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-datetime',
  styleUrl: 'datetime.css'
})
export class Datetime {
  render() {
    return ['tbd']
  }
  /*render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Date & Time Picker</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-list>
          <ion-item>
            <ion-input placeholder="Title"></ion-input>
          </ion-item>
          <ion-item lines="full">
            <ion-input placeholder="Location"></ion-input>
          </ion-item>
          <ion-item-divider></ion-item-divider>
          <ion-item>
            <ion-label>Start Date</ion-label>
            <ion-datetime value="1990-02-19" placeholder="Select Date"></ion-datetime>
          </ion-item>
          <ion-item>
            <ion-label>Start Time</ion-label>
            <ion-datetime display-format="h:mm A" picker-format="h:mm A" value="1990-02-19T07:43Z"></ion-datetime>
          </ion-item>
          <ion-item>
            <ion-label>Ends</ion-label>
            <ion-datetime value="1990-02-20" placeholder="Select Date"></ion-datetime>
          </ion-item>
          <ion-item>
            <ion-label>Repeat</ion-label>
            <ion-datetime placeholder="Never" disabled></ion-datetime>
          </ion-item>
          <ion-item lines="full">
            <ion-label>Travel Time</ion-label>
            <ion-datetime placeholder="None" disabled></ion-datetime>
          </ion-item>
          <ion-item-divider></ion-item-divider>
          <ion-item lines="full">
            <ion-label>Alert</ion-label>
            <ion-datetime placeholder="None" disabled></ion-datetime>
          </ion-item>
        </ion-list>
      </ion-content>
    ];
  }*/
}
