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
    const description = `The <b>Alert</b> is a dialog that presents users with information
      or collects information from the user via inputs. It appears on top of the app's content,
      and must be manually dismissed by the user before they can resume interaction with the app.`;
    const url = `alert`;

    return [
      <ion-alert-controller ref={e => { this.controller = e }} />,
      <ion-header translucent>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Alert</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen class="component-content">
        <component-details description={description} url={url}></component-details>

        <div class="ion-padding-start ion-padding-end">
          <ion-button expand="block" onClick={this.open}>Open Alert</ion-button>
        </div>
      </ion-content>
    ];
  }
}
