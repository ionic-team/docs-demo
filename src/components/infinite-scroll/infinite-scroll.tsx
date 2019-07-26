import { Component, h, Element, State } from '@stencil/core';

@Component({
  tag: 'component-infinite-scroll',
  styleUrl: 'infinite-scroll.css'
})
export class InfiniteScroll {
  @Element() el;

  @State() items = new Array(30).fill(0);

  handleInfinite = async () => {
    const infinite = this.el.querySelector('ion-infinite-scroll');
    console.log('Infinite!');
    await this.wait(500);
    this.items = [...this.items, ...new Array(10).fill(0)];
    infinite.complete();
  }

  wait = (time) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Infinite Scroll</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-list>
          {this.items.map((_, i) => {
            return (
              <ion-item key={i}>
                <ion-label>Item {i}</ion-label>
              </ion-item>
            );
          })}
        </ion-list>

        <ion-infinite-scroll threshold="100px" id="infinite-scroll" onIonInfinite={this.handleInfinite}>
          <ion-infinite-scroll-content loading-spinner="bubbles" loading-text="Loading more data...">
          </ion-infinite-scroll-content>
        </ion-infinite-scroll>
      </ion-content>
    ];
  }
}
