import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'component-refresher',
  styleUrl: 'refresher.css'
})
export class refresher {
  refresher: HTMLIonRefresherElement;

  @State() items = new Array(20).fill(0).map((_, i) => i);

  handleRefresh = () => {
    setTimeout(() => {
      this.items = [...new Array(1).fill(0).map(_ => Math.floor(Math.random() * 100)), ...this.items];
      this.refresher.complete();
    }, 1000);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Refresher</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-refresher slot="fixed" id="refresher" onIonRefresh={this.handleRefresh} ref={e => this.refresher = e}>
          <ion-refresher-content></ion-refresher-content>
        </ion-refresher>
        <ion-list>
          {this.items.map((i) => {
            return (
              <ion-item>
                <ion-label>Item {i}</ion-label>
              </ion-item>
            );
          })}
        </ion-list>
      </ion-content>
    ];
  }
}
