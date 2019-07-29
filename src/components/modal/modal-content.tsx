import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-modal-content',
})
export class ModalContent {
  dismiss = () => {
    const controller = document.querySelector('ion-modal-controller') as HTMLIonModalControllerElement;
    controller.dismiss();
  }

  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Modal Content</ion-title>
          <ion-buttons slot="end">
            <ion-button onClick={this.dismiss}>Close</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,
      <ion-content fullscreen>
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
          <ion-item>
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
