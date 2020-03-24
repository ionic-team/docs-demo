import { Component, h, State } from '@stencil/core';

import { getMode } from '@ionic/core';

@Component({
  tag: 'component-toolbar',
  styleUrl: 'toolbar.css'
})
export class Toolbar {
  @State() showSearchbar = false;

  toggleText() {
    const button = document.getElementById('changeText');
    const hasText = document.getElementById('childText');

    if (hasText) {
      button.removeChild(hasText);
    } else {
      const text = document.createElement('span');
      text.innerHTML = 'Toggle';
      text.id = 'childText';
      button.appendChild(text);
    }
  }

  renderMainToolbar() {
    const ios = getMode() === 'ios';

    if (ios) {
      return (
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-segment value="all">
            <ion-segment-button value="all">All</ion-segment-button>
            <ion-segment-button value="favorites">Favorites</ion-segment-button>
          </ion-segment>
        </ion-toolbar>
      );
    } else if (this.showSearchbar) {
      return (
        <ion-toolbar>
          <ion-searchbar showCancelButton="always" onIonCancel={() => this.showSearchbar = false}></ion-searchbar>
        </ion-toolbar>
      );
    } else {
      return (
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title size="large">Toolbar</ion-title>
          <ion-buttons slot="end">
            <ion-button onClick={() => this.showSearchbar = true}>
              <ion-icon slot="icon-only" name="search-sharp"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      );
    }
  }

  render() {
    const ios = getMode() === 'ios';

    return [
      <ion-header translucent={true}>
        { this.renderMainToolbar() }
        { !ios &&
          <ion-toolbar>
            <ion-segment value="all">
              <ion-segment-button value="all">All</ion-segment-button>
              <ion-segment-button value="favorites">Favorites</ion-segment-button>
            </ion-segment>
          </ion-toolbar>
        }
      </ion-header>,

      <ion-content>
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Toolbar</ion-title>
          </ion-toolbar>
          <ion-toolbar>
            <ion-searchbar showCancelButton="focus"></ion-searchbar>
          </ion-toolbar>
        </ion-header>

        <ion-header>
          <ion-toolbar>
            <ion-title>Page title</ion-title>
            <ion-buttons slot="primary">
              <ion-button>
                <ion-icon slot="icon-only" ios="ellipsis-horizontal" md="ellipsis-vertical"></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="primary">
              <ion-button>
                Edit
              </ion-button>
            </ion-buttons>
            <ion-buttons slot="end">
              <ion-button>
                <ion-icon slot="icon-only" ios="add-outline" md="add-sharp"></ion-icon>
              </ion-button>
            </ion-buttons>


            <ion-title>Page title</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-back-button defaultHref="#" text={ ios ? 'February' : ''}></ion-back-button>
            </ion-buttons>
            <ion-buttons slot="end">
              <ion-button>
                <ion-icon slot="icon-only" ios="list-outline" md="list-sharp"></ion-icon>
              </ion-button>
              <ion-button>
                <ion-icon slot="icon-only" ios="search-outline" md="search-sharp"></ion-icon>
              </ion-button>
              <ion-button>
                <ion-icon slot="icon-only" ios="add-outline" md="add-sharp"></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="primary">
              <ion-button>
                <ion-icon slot="icon-only" ios="heart-outline" md="heart-sharp"></ion-icon>
              </ion-button>
            </ion-buttons>
            <ion-buttons slot="end">
              <ion-button>
                <ion-icon slot="icon-only" ios="search-outline" md="search-sharp"></ion-icon>
              </ion-button>
            </ion-buttons>

            <ion-title>Page title</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="primary">
              <ion-button>
                Reset
              </ion-button>
            </ion-buttons>
            <ion-buttons slot="end">
              <ion-button>
                Done
              </ion-button>
            </ion-buttons>

            <ion-title>Page title</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-back-button defaultHref="#" text={ ios ? 'Notes' : ''}></ion-back-button>
            </ion-buttons>

            <ion-buttons slot="end">
              <ion-button>
                <ion-icon slot="icon-only" name="person-circle-outline"></ion-icon>
              </ion-button>
              <ion-button>
                <ion-icon slot="icon-only" name="share-outline"></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-menu-button autoHide={false}></ion-menu-button>
            </ion-buttons>

            <ion-title>Page title</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-back-button defaultHref="#"></ion-back-button>
            </ion-buttons>
            <ion-buttons slot="end">
              <ion-button>
                <ion-icon slot="icon-only" ios="star-outline" md="star-sharp"></ion-icon>
              </ion-button>
            </ion-buttons>

            <ion-title>Page title</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-header>
          <ion-toolbar>
            <ion-title>Page title</ion-title>

            <ion-progress-bar value={.4}></ion-progress-bar>
          </ion-toolbar>
        </ion-header>

      </ion-content>,

      <ion-footer>
        <ion-toolbar>
          <ion-title>
            Click Button to Toggle Text
          </ion-title>
          <ion-buttons slot="end">
            <ion-button id="changeText" onClick={() => this.toggleText()}>
              <ion-icon slot="start" name="refresh"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-footer>
    ];
  }
}
