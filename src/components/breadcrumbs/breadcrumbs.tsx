import { Component, State, h } from '@stencil/core';
import { BreadcrumbCustomEvent } from '@ionic/core';

@Component({
  tag: 'component-breadcrumbs',
  styleUrl: 'breadcrumbs.css'
})
export class Breadcrumb {
  @State() maxBreadcrumbs = 4;

  private expandBreadcrumbs = () => {
    this.maxBreadcrumbs = undefined;
  }

  render() {
    const description = `<b>Breadcrumbs</b> are navigation items that are used to indicate where a user is on an app or site. They should be used for large sites and apps with hierarchically arranged pages. Breadcrumbs can be collapsed based on the maximum number that can show, and the collapsed indicator can be clicked on to present a popover with more information or expand the collapsed breadcrumbs.`;
    const url = 'breadcrumbs';
    const { maxBreadcrumbs } = this;

    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Breadcrumbs</ion-title>
        </ion-toolbar>
        <ion-toolbar>
          <ion-breadcrumbs maxItems={maxBreadcrumbs} onIonCollapsedClick={() => this.expandBreadcrumbs()}>
            <ion-breadcrumb href="#">
              Home
            </ion-breadcrumb>
            <ion-breadcrumb href="#electronics">
              Electronics
            </ion-breadcrumb>
            <ion-breadcrumb href="#photography">
              Photography
            </ion-breadcrumb>
            <ion-breadcrumb href="#cameras">
              Cameras
            </ion-breadcrumb>
            <ion-breadcrumb href="#film">
              Film
            </ion-breadcrumb>
            <ion-breadcrumb>
              35 mm
            </ion-breadcrumb>
          </ion-breadcrumbs>
          </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen class="component-content">
        <component-details description={description} url={url}></component-details>
      </ion-content>
    ];
  }
}
