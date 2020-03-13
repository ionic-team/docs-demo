import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-button',
  styleUrl: 'button.css'
})
export class button {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Button</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <section>
          <ion-list-header>Small Size</ion-list-header>
          <ion-button size="small">Default</ion-button>
          <ion-button size="small" color="secondary">Secondary</ion-button>
          <ion-button size="small" color="tertiary">Tertiary</ion-button>
        </section>

        <section>
          <ion-list-header>Default Size</ion-list-header>
          <ion-button color="success">Success</ion-button>
          <ion-button color="warning">Warning</ion-button>
          <ion-button color="danger">Danger</ion-button>
        </section>

        <section>
          <ion-list-header>Large Size</ion-list-header>
          <ion-button size="large" color="light">Light</ion-button>
          <ion-button size="large" color="medium">Medium</ion-button>
          <ion-button size="large" color="dark">Dark</ion-button>
        </section>

        <section>
          <ion-list-header>Block Width</ion-list-header>
          <ion-button expand="block">A block button</ion-button>
        </section>

        <section>
          <ion-list-header>Full Width</ion-list-header>
          <ion-button expand="full" color="secondary">A full-width button</ion-button>
        </section>
      </ion-content>
    ];
  }
}
