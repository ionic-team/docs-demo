import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-alert',
  styleUrl: 'alert.css'
})
export class alert {
  controller: HTMLIonAlertControllerElement;

  open = async () => {
    await this.controller.componentOnReady();

    const alert = await this.controller.create({
      header: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the galaxy?',
      buttons: ['Disagree', 'Agree']
    });
    await alert.present();
  }

  render() {
    return [
      <ion-alert-controller ref={e => { this.controller = e }} />,
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Alert</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen class="ion-padding">
        <ion-button expand="block" onClick={this.open}>Show Alert</ion-button>
      </ion-content>
    ];
  }
}
