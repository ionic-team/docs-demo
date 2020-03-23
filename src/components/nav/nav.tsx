import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-nav',
  styleUrl: 'nav.css'
})
export class Nav {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Navigation</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <div class="ion-padding">
          <p>
            Traditional web apps use a linear history, meaning that the user navigates
            forward to a page and can hit the back button to navigate back.
          </p>

          <p>
            In contrast, mobile apps often utilize parallel, "non-linear" navigation.
            For example, a tabbed interface can have separate navigation stacks for each tab,
            making sure the user never loses their place as they navigate and switch between
            tabs.
          </p>

          <p>
            Ionic Framework embraces the latter approach, supporting parallel navigation
            histories that can also be nested, all while maintaining the familiar browser-style
            navigation concepts web developers are familiar with.
          </p>

          <p>
            The implementation details for navigating in Ionic Framework varies between the
            different frameworks. View the navigation guide for each framework below.
          </p>
        </div>

        <ion-list>
          <ion-item href="https://ionicframework.com/docs/angular/navigation" target="_blank">
            <ion-label>
              Angular Navigation
            </ion-label>
          </ion-item>
          <ion-item href="https://ionicframework.com/docs/react/navigation" target="_blank">
            <ion-label>
              React Navigation
            </ion-label>
          </ion-item>
          <ion-item href="https://ionicframework.com/docs/vue/navigation" target="_blank">
            <ion-label>
              Vue Navigation
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    ];
  }
}
