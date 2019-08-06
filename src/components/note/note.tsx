import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-note',
  styleUrl: 'note.css'
})
export class note {
  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Note</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen>
        <ion-list>
          <ion-list-header>Basic</ion-list-header>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-note>Default</ion-note>
              </ion-col>
              <ion-col>
                <ion-note color="primary">Primary</ion-note>
              </ion-col>
              <ion-col>
                <ion-note color="secondary">Secondary</ion-note>
              </ion-col>
              <ion-col>
                <ion-note color="tertiary">Tertiary</ion-note>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-note color="success">Success</ion-note>
              </ion-col>
              <ion-col>
                <ion-note color="warning">warning</ion-note>
              </ion-col>
              <ion-col>
                <ion-note color="danger">Danger</ion-note>
              </ion-col>
              <ion-col>
                <ion-note color="dark">Dark</ion-note>
              </ion-col>
            </ion-row>

          </ion-grid>

          <ion-list-header>List Notes</ion-list-header>
          <ion-item>
            <ion-label>Default</ion-label>
            <ion-note slot="end">11</ion-note>
          </ion-item>

          <ion-item>
            <ion-label>Primary</ion-label>
            <ion-note slot="end" color="primary">22</ion-note>
          </ion-item>

          <ion-item>
            <ion-label>Secondary</ion-label>
            <ion-note slot="end" color="secondary">33</ion-note>
          </ion-item>

          <ion-item>
            <ion-label>Tertiary</ion-label>
            <ion-note slot="end" color="tertiary">44</ion-note>
          </ion-item>

          <ion-item>
            <ion-label>Success</ion-label>
            <ion-note slot="start" color="success">55</ion-note>
          </ion-item>

          <ion-item>
            <ion-label>Warning</ion-label>
            <ion-note slot="start" color="warning">66</ion-note>
          </ion-item>

          <ion-item>
            <ion-label>Danger</ion-label>
            <ion-note slot="start" color="danger">77</ion-note>
          </ion-item>

          <ion-item>
            <ion-label>Dark</ion-label>
            <ion-note slot="start" color="dark">88</ion-note>
          </ion-item>
        </ion-list>
      </ion-content>
    ];
  }
}
