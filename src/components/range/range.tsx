import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-range',
  styleUrl: 'range.css'
})
export class Range {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Range</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-list>
          <ion-list-header>
            <ion-label>
              Adjust Display
            </ion-label>
          </ion-list-header>

          <ion-item>
            <ion-range aria-label="Brightness" value={20}>
              <ion-icon slot="start" size="small" name="sunny"></ion-icon>
              <ion-icon slot="end" name="sunny"></ion-icon>
            </ion-range>
          </ion-item>

          <ion-item>
            <ion-range aria-label="Contrast" min={-200} max={200} pin color="secondary">
              <ion-icon slot="start" size="small" name="contrast"></ion-icon>
              <ion-icon slot="end" name="contrast"></ion-icon>
            </ion-range>
          </ion-item>

          <ion-item>
            <ion-range aria-label="Brush Size" id="dual-range" dual-knobs pin color="dark" value={{ lower: 33, upper: 60 }}>
              <ion-icon slot="start" size="small" name="brush"></ion-icon>
              <ion-icon slot="end" name="brush"></ion-icon>
            </ion-range>
          </ion-item>

          <ion-item>
            <ion-range aria-label="Temperature" min={1000} max={2000} step={100} value={1400} snaps color="danger">
              <ion-icon slot="start" size="small" color="danger" name="thermometer"></ion-icon>
              <ion-icon slot="end" color="danger" name="thermometer"></ion-icon>
            </ion-range>
          </ion-item>
        </ion-list>
      </ion-content>
    ];
  }
}
