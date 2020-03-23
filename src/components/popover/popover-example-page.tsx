import { Component, h } from '@stencil/core';

@Component({
  tag: 'popover-example-page'
})
export class PopoverExamplePage {
  render() {
    return (
      <ion-list>
        <ion-list-header>
          <ion-label>Ionic</ion-label>
        </ion-list-header>
        <ion-item button>Learn Ionic</ion-item>
        <ion-item button>Documentation</ion-item>
        <ion-item button>Showcase</ion-item>
        <ion-item button>GitHub Repo</ion-item>
      </ion-list>
    )
  }
}
