import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'component-loading',
  styleUrl: 'loading.css'
})
export class loading {
  @Element() el;

  controller: HTMLIonLoadingControllerElement;

  handleButtonClick = async () => {
    await this.controller.componentOnReady();

    const loading = await this.controller.create({
      message: 'Please wait...',
      duration: 3000
    });

    loading.present();
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Loading</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen class="ion-padding">
        <ion-button expand="block" onClick={this.handleButtonClick}>Show Loading</ion-button>
      </ion-content>,

      <ion-loading-controller ref={e => { this.controller = e}}></ion-loading-controller>
    ];
  }
}
