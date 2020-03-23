import { Component, Element, h } from '@stencil/core';

import { modalController } from '@ionic/core';

@Component({
  tag: 'component-modal',
  styleUrl: 'modal.css'
})
export class Modal {
  currentModal: HTMLIonModalElement;

  @Element() el: any;

  openModal = async () => {
    const modal = await modalController.create({
      component: 'component-modal-content',
      swipeToClose: true,
      presentingElement: this.el
    });
    modal.present();
    this.currentModal = modal;
  }

  render() {
    const description = `The <b>Modal</b> is a dialog that appears on top of the app's
      content, and must be dismissed by the user before interaction can resume. It is
      useful as a select component when there are a lot of options to choose from, or when
      filtering items in a list, as well as many other use cases.`;
    const url = 'modal';

    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Modal</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen class="component-content">
        <component-details description={description} url={url}></component-details>

        <div class="ion-padding-start ion-padding-end">
          <ion-button expand="block" onClick={this.openModal}>Open Modal</ion-button>
        </div>
      </ion-content>
    ];
  }
}
