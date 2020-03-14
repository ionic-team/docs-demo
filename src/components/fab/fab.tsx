import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-fab',
  styleUrl: 'fab.css'
})
export class Fab {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Floating Action Button</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen class="ion-padding">
        <ion-fab horizontal="end" vertical="top" slot="fixed" edge>
          <ion-fab-button>
            <ion-icon name="add"></ion-icon>
          </ion-fab-button>
          <ion-fab-list>
            <ion-fab-button color="light">
              <ion-icon name="logo-facebook"></ion-icon>
            </ion-fab-button>
            <ion-fab-button color="light">
              <ion-icon name="logo-twitter"></ion-icon>
            </ion-fab-button>
            <ion-fab-button color="light">
              <ion-icon name="logo-vimeo"></ion-icon>
            </ion-fab-button>
          </ion-fab-list>
        </ion-fab>

        <ion-fab horizontal="end" vertical="center" slot="fixed">
          <ion-fab-button color="danger">
            <ion-icon name="add"></ion-icon>
          </ion-fab-button>
        </ion-fab>

        <ion-fab horizontal="end" vertical="bottom" slot="fixed">
          <ion-fab-button color="light">
            <ion-icon name="caret-back"></ion-icon>
          </ion-fab-button>
          <ion-fab-list side="start">
            <ion-fab-button color="light">
              <ion-icon name="logo-facebook"></ion-icon>
            </ion-fab-button>
            <ion-fab-button color="light">
              <ion-icon name="logo-twitter"></ion-icon>
            </ion-fab-button>
            <ion-fab-button color="light">
              <ion-icon name="logo-vimeo"></ion-icon>
            </ion-fab-button>
          </ion-fab-list>
        </ion-fab>

        <ion-fab horizontal="start" vertical="bottom" slot="fixed">
          <ion-fab-button color="dark">
            <ion-icon name="caret-up"></ion-icon>
          </ion-fab-button>
          <ion-fab-list side="top">
            <ion-fab-button color="light">
              <ion-icon name="logo-facebook"></ion-icon>
            </ion-fab-button>
            <ion-fab-button color="light">
              <ion-icon name="logo-twitter"></ion-icon>
            </ion-fab-button>
            <ion-fab-button color="light">
              <ion-icon name="logo-vimeo"></ion-icon>
            </ion-fab-button>
            <ion-fab-button color="light">
              <ion-icon name="logo-google"></ion-icon>
            </ion-fab-button>
          </ion-fab-list>
        </ion-fab>

        <ion-fab horizontal="start" vertical="top" slot="fixed">
          <ion-fab-button color="secondary">
            <ion-icon name="caret-forward"></ion-icon>
          </ion-fab-button>
          <ion-fab-list side="end">
            <ion-fab-button color="light">
              <ion-icon name="logo-facebook"></ion-icon>
            </ion-fab-button>
            <ion-fab-button color="light">
              <ion-icon name="logo-twitter"></ion-icon>
            </ion-fab-button>
            <ion-fab-button color="light">
              <ion-icon name="logo-vimeo"></ion-icon>
            </ion-fab-button>
            <ion-fab-button color="light">
              <ion-icon name="logo-google"></ion-icon>
            </ion-fab-button>
          </ion-fab-list>
        </ion-fab>

        <ion-fab horizontal="center" vertical="center" slot="fixed">
          <ion-fab-button color="light">
            <ion-icon name="share"></ion-icon>
          </ion-fab-button>
          <ion-fab-list side="top">
            <ion-fab-button color="primary">
              <ion-icon name="logo-vimeo"></ion-icon>
            </ion-fab-button>
          </ion-fab-list>
          <ion-fab-list side="end">
            <ion-fab-button color="dark">
              <ion-icon name="logo-twitter"></ion-icon>
            </ion-fab-button>
          </ion-fab-list>
          <ion-fab-list side="bottom">
            <ion-fab-button color="secondary">
              <ion-icon name="logo-facebook"></ion-icon>
            </ion-fab-button>
          </ion-fab-list>
          <ion-fab-list side="start">
            <ion-fab-button color="light">
              <ion-icon name="logo-google"></ion-icon>
            </ion-fab-button>
          </ion-fab-list>
        </ion-fab>
      </ion-content>
    ];
  }
}
