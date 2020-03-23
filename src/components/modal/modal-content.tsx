import { Component, h } from '@stencil/core';

import { modalController } from '@ionic/core';

@Component({
  tag: 'component-modal-content',
})
export class ModalContent {
  dismiss = () => {
    modalController.dismiss();
  }

  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button onClick={this.dismiss}>Cancel</ion-button>
          </ion-buttons>
          <ion-title>Contacts</ion-title>
          <ion-buttons slot="end">
            <ion-button slot="icon-only">
              <ion-icon name="add"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,
      <ion-content fullscreen={true}>
        <ion-list>
          <ion-item>
            <ion-avatar slot="start">
              <ion-img src="/assets/avatar-gollum.jpg"/>
            </ion-avatar>
            <ion-label>
              <h2>Gollum</h2>
              <p>Sneaky little hobbitses!</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <ion-img src="/assets/avatar-frodo.jpg"/>
            </ion-avatar>
            <ion-label>
              <h2>Frodo</h2>
              <p>Go back, Sam! I'm going to Mordor alone!</p>
            </ion-label>
          </ion-item>
          <ion-item lines="full">
            <ion-avatar slot="start">
              <ion-img src="/assets/avatar-samwise.jpg"/>
            </ion-avatar>
            <ion-label>
              <h2>Samwise</h2>
              <p>What we need is a few good taters.</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    ]
  }
}
