import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-modal',
  styleUrl: 'modal.css'
})
export class modal {
  controller: HTMLIonModalControllerElement;

  currentModal: HTMLIonModalElement;

  openModal = async () => {
    await this.controller.componentOnReady();
    const modal = await this.controller.create({
      component: 'component-modal-content'
    });
    modal.present();
    this.currentModal = modal;
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Modal</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen class="ion-padding">
        <ion-button expand="block" onClick={this.openModal}>Show Modal</ion-button>
      </ion-content>,

      <ion-modal-controller ref={e => { this.controller = e}}></ion-modal-controller>
    ];
  }
}
