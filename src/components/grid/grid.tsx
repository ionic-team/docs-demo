import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-grid',
  styleUrl: 'grid.css'
})
export class grid {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Grid</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-grid>
          <ion-row>
            <ion-col>
              <div>1 of 2</div>
            </ion-col>
            <ion-col>
              <div>2 of 2</div>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <div>1 of 3</div>
            </ion-col>
            <ion-col>
              <div>2 of 3</div>
            </ion-col>
            <ion-col>
              <div>3 of 3</div>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <div>1 of 3</div>
            </ion-col>
            <ion-col col-6>
              <div>2 of 3</div>
            </ion-col>
            <ion-col>
              <div>3 of 3</div>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col col-6>
              <div>1 of 3</div>
            </ion-col>
            <ion-col>
              <div>2 of 3</div>
            </ion-col>
            <ion-col>
              <div>3 of 3</div>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col offset-4>
              <div>1 of 2</div>
            </ion-col>
            <ion-col>
              <div>2 of 2</div>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <div>1 of 2</div>
            </ion-col>
            <ion-col offset-4>
              <div>2 of 2</div>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <div>1 of 4</div>
            </ion-col>
            <ion-col>
              <div>2 of 4</div>
            </ion-col>
            <ion-col>
              <div>3 of 4</div>
            </ion-col>
            <ion-col>
              <div>4 of 4</div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    ];
  }
}
