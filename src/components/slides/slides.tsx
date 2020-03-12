import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-slides',
  styleUrl: 'slides.css'
})
export class slides {
  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Slides</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content scrollY={false} fullscreen>
        <ion-slides>
          <ion-slide>
            <img src="/assets/slide-1.png" class="slide-image"/>
            <h2><b>Ionic Conference App</b></h2>
            <p>The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.</p>
          </ion-slide>

          <ion-slide>
            <img src="/assets/slide-2.png" class="slide-image"/>
            <h2>What is Ionic?</h2>
            <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>
          </ion-slide>

          <ion-slide>
            <img src="/assets/slide-3.png" class="slide-image"/>
            <h2>What is Ionic Pro?</h2>
            <p><b>Ionic Pro</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.</p>
          </ion-slide>

          <ion-slide>
            <img src="/assets/slide-4.png" class="slide-image"/>
            <h2>Ready to Play?</h2>
            <p>Preview the Ionic Conference App by clicking a link below.</p>
            <ion-list>
              <ion-item detail={true} href="https://github.com/ionic-team/ionic-conference-app" target="_blank">
                <ion-label>Ionic <b>Angular</b> Conference App</ion-label>
              </ion-item>
              <ion-item detail={true} href="https://github.com/ionic-team/ionic-react-conference-app" target="_blank">
                <ion-label>Ionic <b>React</b> Conference App</ion-label>
              </ion-item>
              <ion-item detail={true} lines="full" href="https://github.com/ionic-team/ionic-stencil-conference-app" target="_blank">
                <ion-label>Ionic <b>Stencil</b> Conference App</ion-label>
              </ion-item>
            </ion-list>
          </ion-slide>

        </ion-slides>
      </ion-content>
    ];
  }
}
