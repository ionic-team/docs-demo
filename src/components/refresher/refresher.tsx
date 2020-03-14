import { Component, State, h } from '@stencil/core';

const authors = [
  'Everyworse',
  'Nextably',
  'Givester',
  'TempleRentr',
  'Spout',
  'Frigital',
  'Batterbus',
  'Ham Pot',
  'Bat+IQ',
  'Throbe'
];

const titles = [
  'Get 50% off your purchase today!',
  'You\'re in luck, here\'s your Friday the 13th deal!',
  'Don\'t miss out! Your exclusive access to FREE shipping is ending soon.',
  'Treat yourself, you deserve these savings.',
  'Get fresh meals delivered right to your door!',
  'Your 25% Coupon Expires At Midnight',
  'BIG SAVINGS Up To 50% Until Friday',
  'Lucky you: Save today',
  'The Event You Don\'t Want to Miss',
  'Last Chance to Unlock Your 25% Code',
  'CLOSEOUT SALE (We mean it!)',
  'Gifting just got easier — enjoy exclusive access to FREE shipping for two days only.',
  'Our Birthday = Your Savings',
  'SPECIAL OFFER. See inside.',
  'Ready to order?',
  'BONUS Coupon Inside!',
  'Today\'s SPECIAL BUY >> Inside >>',
  'Email Exclusive Offer ENDS TONIGHT!'
];

const messages = [
  'The best brands + the best deals',
  'Recommended by your Personal Vacation Planner',
  'Catch them before they\'re gone.',
  'Shop by tonight to save on gifts to share with the entire family.',
  'Over 30% OFF! View in Browser.',
  'Offer expires 11:59 PM ET. View in Browser.',
  'Free delivery will make us the MPV!',
  'Selection √ | Value √ | Service √',
  '⭐️⭐️⭐️⭐️⭐️',
  'Shop now and save big...',
  'Get the Lowest Price Guaranteed',
  'Use code SAVE10 to save 10% on your next purchase.',
  'Unlock your coupon code now...',
  'Free Shipping Tonight!',
  'Free Shipping On All Orders $35+',
  'Better than takeout in every way',
  'Get $100 off when you try now!',
  'All your favorites are heading your way.',

];

const createItems = (count: number, unread = false) => {
  return new Array(count).fill(0).map(_ => {
    return {
      email: {
        author: authors[Math.floor(Math.random() * authors.length)],
        title: titles[Math.floor(Math.random() * titles.length)],
        message: messages[Math.floor(Math.random() * messages.length)],
      },
      unread
    }
  });
}


@Component({
  tag: 'component-refresher',
  styleUrl: 'refresher.css'
})
export class Refresher {
  refresher: HTMLIonRefresherElement;

  @State() items = createItems(5);

  handleRefresh = (ev: CustomEvent) => {
    setTimeout(() => {
      this.items = [...createItems(2, true), ...this.items];
      (ev.target as HTMLIonRefresherElement).complete();
    }, 1000);
  }

  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Refresher</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-refresher slot="fixed" onIonRefresh={ev => this.handleRefresh(ev)}>
          <ion-refresher-content></ion-refresher-content>
        </ion-refresher>
        <ion-list>
          {this.items.map(({ unread, email }: any) => {
            return (
              <ion-item>
                <div slot="start" class={unread ? 'dot dot-unread' : 'dot'}></div>
                <ion-label>
                  <h2>{email.author}</h2>
                  <h3>{email.title}</h3>
                  <p>{email.message}</p>
                </ion-label>
              </ion-item>
            );
          })}
        </ion-list>
      </ion-content>
    ];
  }
}
