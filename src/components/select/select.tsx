import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-select',
  styleUrl: 'select.css'
})
export class Select {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Select</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-list>
          <ion-list-header lines="full">
            <ion-label>Select Trip</ion-label>
          </ion-list-header>
          <ion-item>
            <ion-label position="stacked">
              Origin
            </ion-label>
            <ion-select placeholder="Select Airport">
              <ion-select-option value="madison">Madison (MSN)</ion-select-option>
              <ion-select-option value="chicago">Chicago (ORD)</ion-select-option>
              <ion-select-option value="austin">Austin (AUS)</ion-select-option>
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">
              Destination
            </ion-label>
            <ion-select placeholder="Select Airport">
              <ion-select-option value="newyork">New York (JFK)</ion-select-option>
              <ion-select-option value="honolulu">Honolulu (HNL)</ion-select-option>
              <ion-select-option value="baltimore">Baltimore (BWI)</ion-select-option>
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">
              Passengers
            </ion-label>
            <ion-select value="1">
              <ion-select-option value="1">1 Adult</ion-select-option>
              <ion-select-option value="2">2 Adults</ion-select-option>
              <ion-select-option value="3">3 Adults</ion-select-option>
              <ion-select-option value="4">4 Adults</ion-select-option>
            </ion-select>
          </ion-item>
          <ion-item lines="full">
            <ion-label position="stacked">
              Add-ons
            </ion-label>
            <ion-select placeholder="Select Multiple Add-ons" multiple={true}>
              <ion-select-option value="firstclass">First Class</ion-select-option>
              <ion-select-option value="bag">Additional Bag</ion-select-option>
              <ion-select-option value="headphones">Headphones</ion-select-option>
              <ion-select-option value="wifi">Inflight WiFi</ion-select-option>
            </ion-select>
          </ion-item>
        </ion-list>

        <ion-list>
          <ion-list-header>
            <ion-label>Select Interfaces</ion-label>
          </ion-list-header>
          <ion-item>
            <ion-label position="stacked">
              Gender
            </ion-label>
            <ion-select placeholder="Popover Interface" interface="popover">
              <ion-select-option value="f">Female</ion-select-option>
              <ion-select-option value="m">Male</ion-select-option>
          </ion-select>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">
              Mute Notifications
            </ion-label>
            <ion-select placeholder="Action Sheet Interface" interface="action-sheet">
              <ion-select-option value="mute_15">For 15 Minutes</ion-select-option>
              <ion-select-option value="mute_1">For 1 Hour</ion-select-option>
              <ion-select-option value="mute_23">For 24 Hours</ion-select-option>
              <ion-select-option value="mute_inf">Until I turn it back on</ion-select-option>
            </ion-select>
          </ion-item>
        </ion-list>

      </ion-content>
    ];
  }
}
