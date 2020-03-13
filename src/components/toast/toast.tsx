import { Component, h } from '@stencil/core';

import { toastController } from '@ionic/core';

@Component({
  tag: 'component-toast',
  styleUrl: 'toast.css'
})
export class toast {
  openToast = async () => {
    const toast = await toastController.create({
      color: 'dark',
      duration: 2000,
      message: 'Paired successfully',
      buttons: [{
        text: 'Close',
        role: 'cancel'
      }]
    });

    toast.present();
  }
  render() {
    const description = `The <b>Toast</b> is a subtle notification commonly used in modern
      applications. It can be used to provide feedback about an operation or to display a
      system message. It appears on top of the app's content, and can be dismissed by the
      app to resume user interaction with the app.`;
    const url = 'toast';

    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Toast</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen class="component-content">
        <component-details description={description} url={url}></component-details>

        <div class="ion-padding-start ion-padding-end">
          <ion-button expand="block" onClick={this.openToast}>Open Toast</ion-button>
        </div>
      </ion-content>
    ];
  }
}
