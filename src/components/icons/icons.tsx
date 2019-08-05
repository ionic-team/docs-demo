import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-icons',
  styleUrl: 'icons.css'
})
export class icons {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Icons</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-list>
          <ion-item>
            <ion-icon name="home" id="dynamicColor" slot="start"></ion-icon>
            <ion-label>
              <code>
                name="home"
              </code>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-icon name="home" slot="start"></ion-icon>
            <ion-label>
              <code>
                name="home"
              </code>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-icon id="dynamicHomeIcon" slot="start"></ion-icon>
            <ion-label>
              <code>
                id="dynamicHomeIcon"
              </code>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-icon name="md-home" slot="start"></ion-icon>
            <ion-label>
              <code>
                name="md-home"
              </code>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-icon name="ios-home" slot="start"></ion-icon>
            <ion-label>
              <code>
                name="ios-home"
              </code>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-icon name="ios-home" slot="end"></ion-icon>
            <ion-label>
              <code>
                name="ios-home"
              </code>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-icon name="ios-star-outline" slot="start"></ion-icon>
            <ion-label>
              <code>
                name="ios-star-outline"
              </code>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-icon name="IOS-STAR-OUTLINE" slot="end"></ion-icon>
            <ion-label>
              <code>
                name="IOS-STAR-OUTLINE"
              </code>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-icon name="md-home" color="primary" slot="start"></ion-icon>
            <ion-label>
              <code>
                name="md-home"
              </code>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-icon name="logo-twitter" color="secondary" slot="start"></ion-icon>
            <ion-label>
              <code>
                name="logo-twitter"
              </code>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-icon ios="logo-apple" md="logo-android" slot="start"></ion-icon>
            <ion-label>
              <code>
                ios="logo-apple" md="logo-android"
              </code>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-icon name="color-filter" slot="start"></ion-icon>
            <ion-label>
              <code>
                name="color-filter"
              </code>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-icon ios="ios-color-filter" md="md-color-filter" slot="start"></ion-icon>
            <ion-label>
              <code>
                ios="ios-color-filter" md="md-color-filter"
              </code>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-icon ios="MD-COLOR-FILTER" md="IOS-COLOR-FILTER" slot="start"></ion-icon>
            <ion-label>
              <code>
                ios="MD-COLOR-FILTER" md="IOS-COLOR-FILTER"
              </code>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-icon slot="start"></ion-icon>
            <ion-label>
              <code>
                name="null"
              </code>
            </ion-label>
          </ion-item>

          <ion-item detail={true}>
            <ion-label>
              <code>
                ion-item w/ [detail="true"] attr. text text text text text text
              </code>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    ];
  }
}
