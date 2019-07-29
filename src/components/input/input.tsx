import { Component, h, Element, State } from '@stencil/core';

@Component({
  tag: 'component-input',
  styleUrl: 'input.css'
})
export class input {
  @Element() el;

  @State() firstName: string;
  @State() lastName: string;

  controller: HTMLIonAlertControllerElement;

  processForm = async (event) => {
    event.preventDefault();

    await this.controller.componentOnReady();
    const alert = await this.controller.create({
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
      <ion-alert-controller ref={e => { this.controller = e}} />,
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Input</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen>
        <form onSubmit={this.processForm}>
          <ion-list lines="full" class="ion-no-margin ion-no-padding">
            <ion-item>
              <ion-label position="stacked">First Name <ion-text color="danger">*</ion-text></ion-label>
              <ion-input required type="text" onInput={(e: any) => { this.firstName = e.target.value}} value={this.firstName}></ion-input>
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Last Name <ion-text color="danger">*</ion-text></ion-label>
              <ion-input required type="text" onInput={(e: any) => { this.lastName = e.target.value}} value={this.lastName}></ion-input>
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Address</ion-label>
              <ion-input placeholder="Address Line 1"></ion-input>
              <ion-input placeholder="Address Line 2"></ion-input>
              <ion-input placeholder="City"></ion-input>
              <ion-input placeholder="State"></ion-input>
              <ion-input placeholder="Zip Code"></ion-input>
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Notes</ion-label>
              <ion-textarea></ion-textarea>
            </ion-item>
          </ion-list>

          <div class="ion-padding">
            <ion-button expand="block" type="submit" class="ion-no-margin">Create account</ion-button>
          </div>
        </form>
      </ion-content>,
      <ion-alert-controller />
    ];
  }
}
