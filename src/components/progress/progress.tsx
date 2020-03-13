import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-progress',
  styleUrl: 'progress.css'
})
export class Progress {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Progress</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-list>
          <ion-list-header>
            <ion-label>Default</ion-label>
          </ion-list-header>
          <ion-progress-bar></ion-progress-bar>
        </ion-list>

        <ion-list>
          <ion-list-header>
            <ion-label>Default at 50%</ion-label>
          </ion-list-header>
          <ion-progress-bar value={0.5}></ion-progress-bar>
        </ion-list>

        <ion-list>
          <ion-list-header>
            <ion-label>Colors</ion-label>
          </ion-list-header>
          <ion-progress-bar color="secondary" value={0.5}></ion-progress-bar>
          <ion-progress-bar color="tertiary" value={0.5}></ion-progress-bar>

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
        </ion-list>
      </ion-content>
    ];
  }
}
