import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'component-loading',
  styleUrl: 'loading.css'
})
export class loading {
  @Element() el;

  handleButtonClick = () => {
    const controller = this.el.querySelector('ion-loading-controller');
    controller.create({
      message: 'Please wait...',
      duration: 3000
    }).then(loading => loading.present());
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Loading</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-button expand="block" onClick={this.handleButtonClick}>Show Loading</ion-button>
      </ion-content>,

      <ion-loading-controller></ion-loading-controller>
    ];
  }
}
