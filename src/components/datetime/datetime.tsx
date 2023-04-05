import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-datetime',
  styleUrl: 'datetime.css'
})
export class Datetime {

  render() {
    const description = '<b>Datetime</b> presents a calendar interface and time wheel, making it easy for users to select dates and times. Datetimes are similar to the native input elements of <code>datetime-local</code>, however, Ionic\'s Datetime component makes it easy to display the date and time in the a preferred format, and manage the datetime values.';
    const url = 'datetime';

    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Date & Time Picker</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen class="component-content">
        <component-details description={description} url={url}></component-details>

        <ion-list inset={true}>
          <ion-item>
            <ion-input aria-label="Title" placeholder="Title"></ion-input>
          </ion-item>
          <ion-item lines="full">
            <ion-input aria-label="Location" placeholder="Location"></ion-input>
          </ion-item>
        </ion-list>

        <ion-list inset={true}>
          <ion-accordion-group>
            <ion-accordion value="start">
              <ion-item lines="inset" slot="header">
                <ion-label>Starts</ion-label>
                <ion-datetime-button slot="end" datetime="start-date"></ion-datetime-button>
              </ion-item>
              <ion-datetime id="start-date" slot="content" presentation="date"></ion-datetime>
            </ion-accordion>
            <ion-accordion value="end">
              <ion-item lines="inset" slot="header">
                <ion-label>Ends</ion-label>
                <ion-datetime-button slot="end" datetime="end-date"></ion-datetime-button>
              </ion-item>
              <ion-datetime id="end-date" slot="content" presentation="date"></ion-datetime>
            </ion-accordion>
          </ion-accordion-group>
          <ion-item>
            <ion-label>Repeat</ion-label>
            <ion-note slot="end">Never</ion-note>
          </ion-item>
          <ion-item>
            <ion-label>Travel Time</ion-label>
            <ion-note slot="end">None</ion-note>
          </ion-item>
          <ion-item>
            <ion-label>Alert</ion-label>
            <ion-note slot="end">None</ion-note>
          </ion-item>
        </ion-list>
      </ion-content>
    ];
  }
}
