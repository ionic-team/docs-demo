import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-card',
  styleUrl: 'card.css'
})
export class Card {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Card</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-card class="action-card">
          <img class="header-img" src="/assets/card-top-img.png" />
          <ion-card-header>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            <ion-card-title>Card Title</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Here's a small text description for the card content. Nothing more, nothing less.
            <ion-grid>
              <ion-row>
                <ion-col>
                  <ion-button size="small">Action</ion-button>
                </ion-col>
                <ion-col>
                  <ion-button fill="clear">
                    <ion-icon slot="icon-only" ios="heart" md="heart-sharp"></ion-icon>
                  </ion-button>
                  <ion-button fill="clear">
                    <ion-icon slot="icon-only" ios="share" md="share-sharp"></ion-icon>
                  </ion-button>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>

        <ion-card class="apps-card">
          <ion-card-header>
            <ion-card-subtitle>Your Daily List</ion-card-subtitle>
            <ion-card-title>Ionic Apps We Think You'll Love.</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-list>
              <ion-item>
                <ion-thumbnail slot="start">
                  <img src="/assets/logo-sworkit.png"/>
                </ion-thumbnail>
                <ion-label>
                  <h3>Sworkit</h3>
                  <p>The number one fitness app</p>
                </ion-label>
              </ion-item>
              <ion-item>
                <ion-thumbnail slot="start">
                  <img src="/assets/logo-untappd.png"/>
                </ion-thumbnail>
                <ion-label>
                  <h3>Untappd</h3>
                  <p>Discover and share beer</p>
                </ion-label>
              </ion-item>
              <ion-item>
                <ion-thumbnail slot="start">
                  <img src="/assets/logo-shipt.png"/>
                </ion-thumbnail>
                <ion-label>
                  <h3>Shipt</h3>
                  <p>Bring the store to your door</p>
                </ion-label>
              </ion-item>
              <ion-item lines="none">
                <ion-thumbnail slot="start">
                  <img src="/assets/logo-marketwatch.png"/>
                </ion-thumbnail>
                <ion-label>
                  <h3>Market Watch</h3>
                  <p>The latest financial news</p>
                </ion-label>
              </ion-item>
            </ion-list>
          </ion-card-content>
        </ion-card>

        <ion-card class="coworker-card">
          <img src="/assets/card-coworker-header.png" class="header-img"/>
          <ion-card-content>
            <ion-list lines="none">
              <ion-item>
                <ion-avatar slot="start">
                  <img src="/assets/card-coworker-avatar.png"/>
                </ion-avatar>
                <ion-label>
                  <h1>John Parks</h1>
                  <p>Co-worker</p>
                </ion-label>
              </ion-item>
              <ion-item>
                <ion-icon name="call" slot="start"></ion-icon>
                <ion-label>
                  <h2>(555) 418-5602</h2>
                  <p>Mobile phone</p>
                </ion-label>
              </ion-item>
              <ion-item>
                <ion-icon name="mail" slot="start"></ion-icon>
                <ion-label>
                  <h2>jparks@workmail.com</h2>
                  <p>Work email</p>
                </ion-label>
              </ion-item>
              <ion-item>
                <ion-icon name="mail" slot="start"></ion-icon>
                <ion-label>
                  <h2>john.parks92@email.com</h2>
                  <p>Personal email</p>
                </ion-label>
              </ion-item>
            </ion-list>
          </ion-card-content>
        </ion-card>

        <ion-card class="music-card">
          <ion-card-header>
            <img src="/assets/card-album.png"/>
          </ion-card-header>
          <ion-card-content text-center>
            <h2>29 #Strafford APTS</h2>
            <p>Bon Iver — 22, A Million</p>

            <ion-progress-bar value={.25}></ion-progress-bar>

            <ion-button color="dark" fill="clear" size="small">
              <ion-icon slot="icon-only" name="shuffle-sharp"></ion-icon>
            </ion-button>
            <ion-button color="dark" fill="clear" size="large">
              <ion-icon slot="icon-only" name="play-back-sharp"></ion-icon>
            </ion-button>
            <ion-button color="dark" fill="clear" class="button-largest">
              <ion-icon slot="icon-only" name="play-sharp"></ion-icon>
            </ion-button>
            <ion-button color="dark" fill="clear" size="large">
              <ion-icon slot="icon-only" name="play-forward-sharp"></ion-icon>
            </ion-button>
            <ion-button color="dark" fill="clear" size="small">
              <ion-icon slot="icon-only" name="repeat"></ion-icon>
            </ion-button>
          </ion-card-content>
        </ion-card>

        <ion-card>
          <img src="/assets/madison.jpg" />
          <ion-card-header>
            <ion-card-subtitle>Destination</ion-card-subtitle>
            <ion-card-title>Madison, WI</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
          </ion-card-content>
        </ion-card>
      </ion-content>
    ];
  }
}
