import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-toast',
  styleUrl: 'toast.css'
})
export class toast {
  controller: HTMLIonToastControllerElement;

  openToast = async () => {
    const toast = await this.controller.create({
      color: 'dark',
      duration: 2000,
      message: 'Paired successfully',
      showCloseButton: true
    });

    toast.present();
  }
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Toast</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-toast-controller ref={e => { this.controller = e }}></ion-toast-controller>
        <ion-button expand="block" onClick={this.openToast}>Pair <ion-icon slot="end" name="bluetooth"></ion-icon></ion-button>
      </ion-content>
    ];
  }
}
