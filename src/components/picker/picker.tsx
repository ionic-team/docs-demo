import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'component-picker',
  styleUrl: 'picker.css'
})
export class Picker {
  @Element() el!: HTMLElement;

  defaultColumnOptions = [
    [
      'Dog',
      'Cat',
      'Bird',
      'Lizard',
      'Chinchilla'
    ]
  ]

  multiColumnOptions = [
    [
      'Minified',
      'Responsive',
      'Full Stack',
      'Mobile First',
      'Serverless'
    ],
    [
      'Tomato',
      'Avocado',
      'Onion',
      'Potato',
      'Artichoke'
    ]
  ]

  dismissOverlay() {
    document.querySelector('ion-modal').dismiss();
  }

  render() {
    const description = 'The <b>Picker</b> is a dialog that displays columns with options in each column. It appears inline with your page content, but it can also be displayed over your content by using a Modal or a Popover.';
    const url = 'picker';

    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Picker</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen class="component-content">
        <component-details description={description} url={url}></component-details>

        <div class="ion-padding-start ion-padding-end">

          <ion-picker>
            { this.defaultColumnOptions.map((c) => {
              return (
                <ion-picker-column value={c[0]}>
                  { c.map((o) => {
                    return (
                      <ion-picker-column-option value={o}>{o}</ion-picker-column-option>
                    )
                  })}
                </ion-picker-column>
              )
            })}
          </ion-picker>

          <ion-button id="open-picker" class="ion-text-wrap" expand="block">Open Picker in a Modal</ion-button>

          <ion-modal trigger="open-picker">
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-button onClick={() => this.dismissOverlay()}>Cancel</ion-button>
              </ion-buttons>
              <ion-buttons slot="end">
                <ion-button onClick={() => this.dismissOverlay()}>Done</ion-button>
              </ion-buttons>
            </ion-toolbar>
            <ion-picker>
              { this.multiColumnOptions.map((c) => {
                return (
                  <ion-picker-column value={c[0]}>
                    { c.map((o) => {
                      return (
                        <ion-picker-column-option value={o}>{o}</ion-picker-column-option>
                      )
                    })}
                  </ion-picker-column>
                )
              })}
            </ion-picker>
          </ion-modal>
        </div>
      </ion-content>
    ];
  }
}
