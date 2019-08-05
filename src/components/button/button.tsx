import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-button',
  styleUrl: 'button.css'
})
export class button {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Button</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen class="ion-padding">
        <section>
          <header>Small Size</header>
          <ion-button size="small">Default</ion-button>
          <ion-button size="small" color="secondary">Secondary</ion-button>
          <ion-button size="small" color="tertiary">Tertiary</ion-button>
        </section>

        <section>
          <header>Default Size</header>
          <ion-button color="success">Success</ion-button>
          <ion-button color="warning">Warning</ion-button>
          <ion-button color="danger">Danger</ion-button>
        </section>

        <section>
          <header>Large Size</header>
          <ion-button size="large" color="light">Light</ion-button>
          <ion-button size="large" color="medium">Medium</ion-button>
          <ion-button size="large" color="dark">Dark</ion-button>
        </section>

        <section>
          <header>Block Width</header>
          <ion-button expand="block">A block button</ion-button>
        </section>

        <section class="full-width">
          <header>Full Width</header>
          <ion-button expand="full" color="secondary">A full-width button</ion-button>
        </section>
      </ion-content>
    ];
  }
}
