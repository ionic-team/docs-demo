import { Component, State, h } from '@stencil/core';
import { BreadcrumbCustomEvent } from '@ionic/core';

@Component({
  tag: 'component-breadcrumbs',
  styleUrl: 'breadcrumbs.css'
})
export class Breadcrumb {
  private popoverEl?: HTMLIonPopoverElement;

  @State() maxBreadcrumbs = 4;

  private expandBreadcrumbs = () => {
    this.maxBreadcrumbs = undefined;
  }

  private presentPopover = async (ev: BreadcrumbCustomEvent) => {
    const { popoverEl } = this;

    popoverEl.present(ev as any);
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
      </ion-header>,

      <ion-content fullscreen class="component-content">
        <component-details description={description} url={url}></component-details>

        <ion-list inset={true}>
          <ion-list-header>Basic</ion-list-header>
          <ion-breadcrumbs>
            <ion-breadcrumb href="#">
              Home
            </ion-breadcrumb>
            <ion-breadcrumb href="#electronics">
              Electronics
            </ion-breadcrumb>
            <ion-breadcrumb href="#photography">
              Photography
            </ion-breadcrumb>
          </ion-breadcrumbs>
        </ion-list>

        <ion-list inset={true}>
          <ion-list-header>Colors</ion-list-header>
          <ion-breadcrumbs color="secondary">
            <ion-breadcrumb href="#">
              Home
            </ion-breadcrumb>
            <ion-breadcrumb href="#electronics">
              Electronics
            </ion-breadcrumb>
            <ion-breadcrumb href="#photography">
              Photography
            </ion-breadcrumb>
          </ion-breadcrumbs>
        </ion-list>

        <ion-list inset={true}>
          <ion-list-header>Icons - Start</ion-list-header>
          <ion-breadcrumbs>
            <ion-breadcrumb href="#">
              <ion-icon slot="start" name="home"></ion-icon>
              Home
            </ion-breadcrumb>
            <ion-breadcrumb href="#files">
              <ion-icon slot="start" name="folder"></ion-icon>
              Files
            </ion-breadcrumb>
            <ion-breadcrumb href="#projects">
              <ion-icon slot="start" name="folder"></ion-icon>
              Projects
            </ion-breadcrumb>
          </ion-breadcrumbs>
        </ion-list>

        <ion-list inset={true}>
          <ion-list-header>Icons - End</ion-list-header>
          <ion-breadcrumbs>
            <ion-breadcrumb href="#">
              Home
              <ion-icon slot="end" name="home"></ion-icon>
            </ion-breadcrumb>
            <ion-breadcrumb href="#files">
              Files
              <ion-icon slot="end" name="folder"></ion-icon>
            </ion-breadcrumb>
            <ion-breadcrumb href="#projects">
              Projects
              <ion-icon slot="end" name="folder"></ion-icon>
            </ion-breadcrumb>
          </ion-breadcrumbs>
        </ion-list>

        <ion-list inset={true}>
          <ion-list-header>Custom Separator - Icon</ion-list-header>
          <ion-breadcrumbs>
            <ion-breadcrumb href="#">
              Home
              <ion-icon slot="separator" name="arrow-forward"></ion-icon>
            </ion-breadcrumb>
            <ion-breadcrumb href="#electronics">
              Electronics
              <ion-icon slot="separator" name="arrow-forward"></ion-icon>
            </ion-breadcrumb>
            <ion-breadcrumb href="#photography">
              Photography
              <ion-icon slot="separator" name="arrow-forward"></ion-icon>
            </ion-breadcrumb>
          </ion-breadcrumbs>
        </ion-list>

        <ion-list inset={true}>
          <ion-list-header>Max Items</ion-list-header>
          <ion-breadcrumbs maxItems={4}>
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
        </ion-list>

        <ion-list inset={true}>
          <ion-list-header>Items Before Collapse</ion-list-header>
          <ion-breadcrumbs maxItems={4} itemsBeforeCollapse={2}>
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
        </ion-list>

        <ion-list inset={true}>
          <ion-list-header>Items After Collapse</ion-list-header>
          <ion-breadcrumbs maxItems={4} itemsAfterCollapse={3}>
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
        </ion-list>

        <ion-list inset={true}>
          <ion-list-header>Items Before And After Collapse</ion-list-header>
          <ion-breadcrumbs maxItems={4} itemsBeforeCollapse={0} itemsAfterCollapse={3}>
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
        </ion-list>

        <ion-list inset={true}>
          <ion-list-header>Expand on Collapsed Indicator Click</ion-list-header>
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

          <ion-popover alignment="center" ref={el => this.popoverEl = el}>
            <ion-content>
              <ion-list>
                <ion-item href="#electronics">
                  <ion-label>Electronics</ion-label>
                </ion-item>
                <ion-item href="#photography">
                  <ion-label>Photography</ion-label>
                </ion-item>
                <ion-item href="#cameras">
                  <ion-label>Cameras</ion-label>
                </ion-item>
                <ion-item href="#film">
                  <ion-label>Film</ion-label>
                </ion-item>
              </ion-list>
            </ion-content>
          </ion-popover>
        </ion-list>

        <ion-list inset={true}>
          <ion-list-header>Popover on Collapsed Indicator Click</ion-list-header>
          <ion-breadcrumbs maxItems={4} onIonCollapsedClick={(ev: BreadcrumbCustomEvent) => { this.presentPopover(ev) }}>
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
        </ion-list>

        <ion-list inset={true}>
          <ion-list-header>Custom Separator - Icon</ion-list-header>
          <ion-breadcrumbs>
            <ion-breadcrumb href="#">
              Home
              <ion-icon slot="separator" name="arrow-forward"></ion-icon>
            </ion-breadcrumb>
            <ion-breadcrumb href="#electronics">
              Electronics
              <ion-icon slot="separator" name="arrow-forward"></ion-icon>
            </ion-breadcrumb>
            <ion-breadcrumb href="#photography">
              Photography
              <ion-icon slot="separator" name="arrow-forward"></ion-icon>
            </ion-breadcrumb>
          </ion-breadcrumbs>
        </ion-list>
      </ion-content>
    ];
  }
}
