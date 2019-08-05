import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-text',
  styleUrl: 'text.css',
  shadow: true
})
export class text {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Text</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen class="ion-padding">
        <ion-text color="primary">
          <h1> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        </ion-text>

        <ion-text color="secondary">
          <h2>Nam rutrum justo massa, maximus elementum leo dignissim ac.</h2>
        </ion-text>

        <ion-text color="tertiary">
          <h3>Vestibulum eleifend lorem nec neque interdum varius.</h3>
        </ion-text>

        <ion-text color="success">
          <h4>Sed in neque at nibh congue tincidunt.</h4>
        </ion-text>

        <ion-text color="warning">
          <h5>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</h5>
        </ion-text>

        <ion-text color="danger">
          <h6>Suspendisse potenti.</h6>
        </ion-text>

        <p>
            Donec magna odio, <ion-text color="primary">semper</ion-text> ac nibh et, vestibulum eleifend felis.
            Donec <ion-text color="secondary">pulvinar</ion-text> ex non quam vulputate malesuada in a magna.
            Praesent massa arcu, <ion-text color="tertiary">vehicula</ion-text> id pharetra et, cursus at lectus.
        </p>
      </ion-content>
    ];
  }
}
