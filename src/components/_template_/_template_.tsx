import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-_template_',
  styleUrl: '_template_.css'
})
export class _template_ {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>_name_</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
      </ion-content>
    ];
  }
}
