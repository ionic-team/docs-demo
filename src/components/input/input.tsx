import { Component, Element, State, h } from '@stencil/core';

import { alertController } from '@ionic/core';

@Component({
  tag: 'component-input',
  styleUrl: 'input.css'
})
export class Input {
  @Element() el;

  @State() firstName: string;
  @State() lastName: string;

  processForm = async (event) => {
    event.preventDefault();

    const alert = await alertController.create({
      header: 'Account Created',
      message: `Created account for: <b>${this.firstName} ${this.lastName}</b>`,
      buttons: [{
        text: 'OK'
      }]
    })

    alert.present();
  }

  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Input</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <form onSubmit={this.processForm}>
          <ion-list lines="full" class="ion-no-margin ion-no-padding">
            <ion-item>
              <ion-label position="stacked">First Name <ion-text color="danger">*</ion-text></ion-label>
              <ion-input aria-label="First Name" required type="text" onInput={(e: any) => { this.firstName = e.target.value}} value={this.firstName}></ion-input>
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Last Name <ion-text color="danger">*</ion-text></ion-label>
              <ion-input aria-label="Last Name" equired type="text" onInput={(e: any) => { this.lastName = e.target.value}} value={this.lastName}></ion-input>
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Address</ion-label>
              <ion-input aria-label="Address Line 1" placeholder="Address Line 1"></ion-input>
              <ion-input aria-label="Address Line 2" placeholder="Address Line 2"></ion-input>
              <ion-input aria-label="City" placeholder="City"></ion-input>
              <ion-input aria-label="State" placeholder="State"></ion-input>
              <ion-input aria-label="Zip Code" placeholder="Zip Code"></ion-input>
            </ion-item>

            <ion-item>
              <ion-textarea label="Notes"></ion-textarea>
            </ion-item>
          </ion-list>

          <div class="ion-padding">
            <ion-button expand="block" type="submit" class="ion-no-margin">Create account</ion-button>
          </div>
        </form>
      </ion-content>,
    ];
  }
}
