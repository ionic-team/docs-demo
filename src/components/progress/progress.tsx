import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-progress',
  styleUrl: 'progress.css'
})
export class Progress {
  progressEl: HTMLIonProgressBarElement;

  increaseValue() {
    const value = this.progressEl.value;

    this.progressEl.value = value + .1;
  }

  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Progress</ion-title>
          <ion-progress-bar type="indeterminate" color="dark"></ion-progress-bar>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-list>
          <ion-list-header>
            <ion-label>Determinate</ion-label>
          </ion-list-header>
          <ion-progress-bar value={0.2}></ion-progress-bar>
        </ion-list>

        <ion-list>
          <ion-list-header>
            <ion-label>Control Determinate</ion-label>
            <ion-button onClick={() => this.increaseValue()}>
              <ion-icon slot="icon-only" ios="add-outline" md="add-sharp"></ion-icon>
            </ion-button>
          </ion-list-header>
          <ion-progress-bar ref={el => this.progressEl = el} value={0.1}></ion-progress-bar>
        </ion-list>

        <ion-list>

          <ion-list-header>
            <ion-label>
              Indeterminate
            </ion-label>
          </ion-list-header>
          <ion-progress-bar type="indeterminate"></ion-progress-bar>

          <ion-list-header>
            <ion-label>
              Indeterminate (reversed)
            </ion-label>
          </ion-list-header>
          <ion-progress-bar type="indeterminate" reversed={true}></ion-progress-bar>

          <ion-list-header>
            <ion-label>
              Buffer
            </ion-label>
          </ion-list-header>
          <ion-progress-bar value={0.25} buffer={0.5}></ion-progress-bar>

          <ion-list-header>
            <ion-label>Colors</ion-label>
          </ion-list-header>
          <ion-progress-bar type="indeterminate" color="secondary" class="progress-margin"></ion-progress-bar>
          <ion-progress-bar type="indeterminate" reversed={true} color="tertiary" class="progress-margin"></ion-progress-bar>
          <ion-progress-bar value={0.25} buffer={0.5} color="danger" class="progress-margin"></ion-progress-bar>
        </ion-list>
      </ion-content>
    ];
  }
}
