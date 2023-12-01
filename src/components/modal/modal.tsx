import { Component, Element, h } from '@stencil/core';
import { modalController, ModalOptions } from '@ionic/core';

@Component({
  tag: 'component-modal',
  styleUrl: 'modal.css'
})
export class Modal {
  currentModal: HTMLIonModalElement;

  @Element() el: any;

  openModal = async (opts: Partial<ModalOptions> = {}) => {
    const modal = await modalController.create({
      component: 'component-modal-content',
      ...opts
    });
    modal.present();
    this.currentModal = modal;
  }

  private openDefaultModal = () => {
    this.openModal();
  }

  private openSheetModal = () => {
    this.openModal({
      breakpoints: [0, 0.2, 0.5, 1],
      initialBreakpoint: 0.2
    })
  }

  private openCardModal = () => {
    this.openModal({
      presentingElement: this.el
    })
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
          <ion-button expand="block" onClick={this.openDefaultModal}>Open Modal</ion-button>
          <ion-button class="ion-text-wrap" expand="block" onClick={this.openCardModal}>Open Card Modal</ion-button>
          <ion-button class="ion-text-wrap" expand="block" onClick={this.openSheetModal}>Open Sheet Modal</ion-button>
        </div>
      </ion-content>
    ];
  }
}
