import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-reorder',
  styleUrl: 'reorder.css'
})
export class Reorder {
  handleReorder = ({ detail }) => {
    detail.complete();
  }

  toggleReorder = () => {
    const reorderGroup = document.getElementById('reorder') as HTMLIonReorderGroupElement;
    reorderGroup.disabled = !reorderGroup.disabled;
  }

  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Reorder</ion-title>
          <ion-buttons slot="end">
            <ion-button onClick={this.toggleReorder}>Toggle</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-list>
          <ion-list-header>
            <ion-label>
              Reorder Icon
            </ion-label>
          </ion-list-header>
          <ion-reorder-group id="reorder" onIonItemReorder={this.handleReorder}>
            <ion-item>
              <ion-label>
                Item 1
              </ion-label>
              <ion-reorder slot="end"></ion-reorder>
            </ion-item>

            <ion-item>
              <ion-label>
                Item 2
              </ion-label>
              <ion-reorder slot="end"></ion-reorder>
            </ion-item>

            <ion-item>
              <ion-label>
                Item 3
              </ion-label>
              <ion-reorder slot="end"></ion-reorder>
            </ion-item>

            <ion-item>
              <ion-label>
                Item 4
              </ion-label>
              <ion-reorder slot="end"></ion-reorder>
            </ion-item>

            <ion-list-header>
              <ion-label>
                Custom Reorder Icon
              </ion-label>
            </ion-list-header>
            <ion-item>
              <ion-label>
                Item 5
              </ion-label>
              <ion-reorder slot="end">
                <ion-icon name="swap-vertical"></ion-icon>
              </ion-reorder>
            </ion-item>

            <ion-item>
              <ion-label>
                Item 6
              </ion-label>
              <ion-reorder slot="end">
                <ion-icon name="swap-vertical"></ion-icon>
              </ion-reorder>
            </ion-item>

            <ion-item>
              <ion-label>
                Item 7
              </ion-label>
              <ion-reorder slot="end">
                <ion-icon name="swap-vertical"></ion-icon>
              </ion-reorder>
            </ion-item>

            <ion-list-header>
              <ion-label>
                Reorder Item
              </ion-label>
            </ion-list-header>
            <ion-reorder>
              <ion-item>
                <ion-label>
                  Item 8
                </ion-label>
              </ion-item>
            </ion-reorder>

            <ion-reorder>
              <ion-item>
                <ion-label>
                  Item 9
                </ion-label>
              </ion-item>
            </ion-reorder>

            <ion-reorder>
              <ion-item>
                <ion-label>
                  Item 10
                </ion-label>
              </ion-item>
            </ion-reorder>

          </ion-reorder-group>
        </ion-list>
      </ion-content>
    ];
  }
}
