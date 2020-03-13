import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-list',
  styleUrl: 'list.css'
})
export class list {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>List</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-list>
          <ion-list-header>
            Recent Conversations
          </ion-list-header>

          <ion-item>
            <ion-avatar slot="start">
              <img src="/assets/avatar-finn.png" />
            </ion-avatar>
            <ion-label>
              <h2>Finn</h2>
              <h3>I'm a big deal</h3>
              <p>Listen, I've had a pretty messed up day...</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-avatar slot="start">
              <img src="/assets/avatar-han.png" />
            </ion-avatar>
            <ion-label>
              <h2>Han</h2>
              <h3>Look, kid...</h3>
              <p>I've got enough on my plate as it is, and I...</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-avatar slot="start">
              <img src="/assets/avatar-rey.png" />
            </ion-avatar>
            <ion-label>
              <h2>Rey</h2>
              <h3>I can handle myself</h3>
              <p>You will remove these restraints and leave...</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-avatar slot="start">
              <img src="/assets/avatar-luke.png" />
            </ion-avatar>
            <ion-label>
              <h2>Luke</h2>
              <h3>Your thoughts betray you</h3>
              <p>I feel the good in you, the conflict...</p>
            </ion-label>
          </ion-item>
        </ion-list>

        <ion-list>
          <ion-list-header>
            Online
          </ion-list-header>

          <ion-item>
            <ion-avatar slot="start">
              <img src="/assets/avatar-poe.png" />
            </ion-avatar>
            <ion-label>
              <h2>Poe</h2>
              <h3>New Ride</h3>
              <p>I just upgraded my X-Wing. Next time...</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-avatar slot="start">
              <img src="/assets/avatar-ben.png" />
            </ion-avatar>
            <ion-label>
              <h2>Ben</h2>
              <h3>Move Along</h3>
              <p>These aren't the droids you're looking for...</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-avatar slot="start">
              <img src="/assets/avatar-leia.png" />
            </ion-avatar>
            <ion-label>
              <h2>Leia</h2>
              <h3>You're My Only Hope</h3>
              <p>I've placed information vital to the survival...</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-avatar slot="start">
              <img src="/assets/avatar-yoda.png" />
            </ion-avatar>
            <ion-label>
              <h2>Yoda</h2>
              <h3>Size matters not</h3>
              <p>Do or do not. There is no try...</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    ];
  }
}
