import { Component, Element, h } from '@stencil/core';

import { loadingController } from '@ionic/core';

@Component({
  tag: 'component-loading',
  styleUrl: 'loading.css'
})
export class Loading {
  @Element() el;

  handleButtonClick = async () => {
    const loading = await loadingController.create({
      message: 'Please wait...',
      duration: 3000
    });

    loading.present();
  }

  render() {
    const description = `The <b>Loading</b> overlay can be used to indicate activity
      while blocking user interaction. It appears on top of the app's content, and can be
      dismissed by the app to resume user interaction with the app.`;
    const url = 'loading';

    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Loading</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen class="component-content">
        <component-details description={description} url={url}></component-details>

        <div class="ion-padding-start ion-padding-end">
          <ion-button expand="block" onClick={this.handleButtonClick}>Open Loading</ion-button>
        </div>
      </ion-content>
    ];
  }
}
