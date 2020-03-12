import { Component, h, State } from '@stencil/core';

const names = [
  'Burt Bear',
  'Charlie Cheetah',
  'Donald Duck',
  'Eva Eagle',
  'Ellie Elephant',
  'Gino Giraffe',
  'Isabella Iguana',
  'Karl Kitten',
  'Lionel Lion',
  'Molly Mouse',
  'Paul Puppy',
  'Rachel Rabbit',
  'Ted Turtle'
];

const createItems = (count: number, unread: boolean) => {
  return new Array(count).fill(0).map(_ => {
    return {
      name: names[Math.floor(Math.random() * names.length)],
      unread
    }
  });
}


@Component({
  tag: 'component-refresher',
  styleUrl: 'refresher.css'
})
export class refresher {
  refresher: HTMLIonRefresherElement;

  @State() items = createItems(5, false);

  handleRefresh = () => {
    setTimeout(() => {
      this.items = [...createItems(2, true), ...this.items];
      this.refresher.complete();
    }, 1000);
  }

  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Refresher</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen>
        <ion-refresher slot="fixed" id="refresher" onIonRefresh={this.handleRefresh} ref={e => this.refresher = e}>
          <ion-refresher-content></ion-refresher-content>
        </ion-refresher>
        <ion-list>
          {this.items.map(({ unread, name }: any) => {
            return (
              <ion-item>
                <div slot="start" class={unread ? 'dot unread' : 'dot read'}></div>
                <ion-label class="ion-text-wrap">
                  <h2>{name}</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </ion-label>
              </ion-item>
            );
          })}
        </ion-list>
      </ion-content>
    ];
  }
}
