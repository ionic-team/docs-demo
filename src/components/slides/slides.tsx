import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-slides',
  styleUrl: 'slides.css'
})
export class slides {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Slides</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content scrollY={false} class="ion-padding" fullscreen>
        <ion-slides>
          <ion-slide>
            <img src="/assets/slide-1.png"/>
            <h2>Welcome to the <b>ICA</b></h2>
            <p>The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.</p>
          </ion-slide>

          <ion-slide>
            <img src="/assets/slide-2.png"/>
            <h2>What is Ionic?</h2>
            <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>
          </ion-slide>

          <ion-slide>
            <img src="/assets/slide-3.png"/>
            <h2>What is Ionic Pro?</h2>
            <p><b>Ionic Pro</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.</p>
          </ion-slide>

          <ion-slide>
            <img src="/assets/slide-4.png"/>
            <h2>Ready to Play?</h2>
            <ion-button fill="clear">Continue <ion-icon slot="end" name="arrow-forward"></ion-icon></ion-button>
          </ion-slide>

        </ion-slides>
      </ion-content>
    ];
  }
}
