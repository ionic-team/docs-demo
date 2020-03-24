/* eslint-disable @typescript-eslint/class-name-casing */
import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-item-group',
  styleUrl: 'item-group.css'
})
export class ItemGroup {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Item Group</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-list>
          <ion-item-group>
            <ion-item-divider>
              <ion-label>A</ion-label>
            </ion-item-divider>

            <ion-item>
              <ion-label><b>Abigail</b></ion-label>
            </ion-item>

            <ion-item>
              <ion-label>Jesse <b>Adams</b></ion-label>
            </ion-item>

            <ion-item>
              <ion-label><b>Alan</b></ion-label>
            </ion-item>
          </ion-item-group>

          <ion-item-group>
            <ion-item-divider>
              <ion-label>B</ion-label>
            </ion-item-divider>

            <ion-item>
              <ion-label>James <b>Bach</b></ion-label>
            </ion-item>

            <ion-item>
              <ion-label>Flora <b>Ball</b></ion-label>
            </ion-item>

            <ion-item>
              <ion-label>London <b>Black</b></ion-label>
            </ion-item>

            <ion-item>
              <ion-label>Alisha <b>Brady</b></ion-label>
            </ion-item>

            <ion-item>
              <ion-label><b>Brianna</b></ion-label>
            </ion-item>

            <ion-item>
              <ion-label>Monica <b>Brown</b></ion-label>
            </ion-item>
          </ion-item-group>

          <ion-item-group>
            <ion-item-divider>
              <ion-label>C</ion-label>
            </ion-item-divider>

            <ion-item>
              <ion-label><b>Carla</b></ion-label>
            </ion-item>

            <ion-item>
              <ion-label>Brian <b>Clark</b></ion-label>
            </ion-item>

            <ion-item>
              <ion-label>Robert <b>Cline</b></ion-label>
            </ion-item>
          </ion-item-group>
        </ion-list>
      </ion-content>
    ];
  }
}
