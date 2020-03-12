import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'component-icons',
  styleUrl: 'icons.css'
})
export class icons {
  @State() segment = '';

  updateSegment(ev) {
    this.segment = ev.detail.value;
  }

  render() {
    const { segment } = this;

    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Icons</ion-title>
        </ion-toolbar>
        <ion-toolbar>
          <ion-segment value={segment} onIonChange={(ev) => this.updateSegment(ev)}>
            <ion-segment-button value="-outline">Outline</ion-segment-button>
            <ion-segment-button value="">Filled</ion-segment-button>
            <ion-segment-button value="-sharp">Sharp</ion-segment-button>
          </ion-segment>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true} class="ion-padding-top ion-text-center">
        {/* Logo icons never change fill */}
        <ion-icon name="logo-ionic"></ion-icon>
        <ion-icon name="logo-pwa"></ion-icon>
        <ion-icon name="logo-ionitron"></ion-icon>
        <ion-icon name="logo-javascript"></ion-icon>
        <ion-icon name="logo-slack"></ion-icon>
        <ion-icon name="logo-android"></ion-icon>
        <ion-icon name="logo-apple"></ion-icon>

        {/* All other icons */}
        <ion-icon name={`heart${segment}`}></ion-icon>
        <ion-icon name={`happy${segment}`}></ion-icon>
        <ion-icon name={`airplane${segment}`}></ion-icon>
        <ion-icon name={`finger-print${segment}`}></ion-icon>
        <ion-icon name={`person${segment}`}></ion-icon>
        <ion-icon name={`people-circle${segment}`}></ion-icon>
        <ion-icon name={`apps${segment}`}></ion-icon>

        <ion-icon name={`lock-closed${segment}`}></ion-icon>
        <ion-icon name={`key${segment}`}></ion-icon>
        <ion-icon name={`attach${segment}`}></ion-icon>
        <ion-icon name={`map${segment}`}></ion-icon>
        <ion-icon name={`navigate${segment}`}></ion-icon>
        <ion-icon name={`pin${segment}`}></ion-icon>
        <ion-icon name={`locate${segment}`}></ion-icon>

        <ion-icon name={`mic${segment}`}></ion-icon>
        <ion-icon name={`volume-high${segment}`}></ion-icon>
        <ion-icon name={`musical-notes${segment}`}></ion-icon>
        <ion-icon name={`radio${segment}`}></ion-icon>
        <ion-icon name={`cafe${segment}`}></ion-icon>
        <ion-icon name={`calculator${segment}`}></ion-icon>
        <ion-icon name={`bus${segment}`}></ion-icon>

        <ion-icon name={`wine${segment}`}></ion-icon>
        <ion-icon name={`camera${segment}`}></ion-icon>
        <ion-icon name={`star${segment}`}></ion-icon>
        <ion-icon name={`image${segment}`}></ion-icon>
        <ion-icon name={`pin${segment}`}></ion-icon>
        <ion-icon name={`arrow-up-circle${segment}`}></ion-icon>
        <ion-icon name={`arrow-undo${segment}`}></ion-icon>

        <ion-icon name={`chevron-down${segment}`}></ion-icon>
        <ion-icon name={`play-circle${segment}`}></ion-icon>
        <ion-icon name={`cloud${segment}`}></ion-icon>
        <ion-icon name={`sunny${segment}`}></ion-icon>
        <ion-icon name={`umbrella${segment}`}></ion-icon>
        <ion-icon name={`rainy${segment}`}></ion-icon>
        <ion-icon name={`cloud-done${segment}`}></ion-icon>

        <ion-icon name={`game-controller${segment}`}></ion-icon>
        <ion-icon name={`alarm${segment}`}></ion-icon>
        <ion-icon name={`barbell${segment}`}></ion-icon>
        <ion-icon name={`earth${segment}`}></ion-icon>
        <ion-icon name={`bicycle${segment}`}></ion-icon>
        <ion-icon name={`basket${segment}`}></ion-icon>
        <ion-icon name={`car${segment}`}></ion-icon>

        <ion-icon name={`flash-off${segment}`}></ion-icon>
        <ion-icon name={`gift${segment}`}></ion-icon>
        <ion-icon name={`heart-half${segment}`}></ion-icon>
        <ion-icon name={`ice-cream${segment}`}></ion-icon>
        <ion-icon name={`leaf${segment}`}></ion-icon>
        <ion-icon name={`paw${segment}`}></ion-icon>
        <ion-icon name={`ribbon${segment}`}></ion-icon>

        <ion-icon name={`shirt${segment}`}></ion-icon>
        <ion-icon name={`thumbs-up${segment}`}></ion-icon>
        <ion-icon name={`warning${segment}`}></ion-icon>
        <ion-icon name={`ice-cream${segment}`}></ion-icon>
        <ion-icon name={`trash${segment}`}></ion-icon>
        <ion-icon name={`tennisball${segment}`}></ion-icon>
        <ion-icon name={`rose${segment}`}></ion-icon>

        <ion-icon name={`subway${segment}`}></ion-icon>
        <ion-icon name={`speedometer${segment}`}></ion-icon>
        <ion-icon name={`egg${segment}`}></ion-icon>
        <ion-icon name={`color-fill${segment}`}></ion-icon>
        <ion-icon name={`cash${segment}`}></ion-icon>
        <ion-icon name={`boat${segment}`}></ion-icon>
        <ion-icon name={`aperture${segment}`}></ion-icon>

        <ion-icon name={`albums${segment}`}></ion-icon>
        <ion-icon name={`football${segment}`}></ion-icon>
        <ion-icon name={`at-circle${segment}`}></ion-icon>
        <ion-icon name={`bandage${segment}`}></ion-icon>
        <ion-icon name={`barcode${segment}`}></ion-icon>
        <ion-icon name={`bluetooth${segment}`}></ion-icon>
        <ion-icon name={`bug${segment}`}></ion-icon>

        <ion-icon name={`chatbox${segment}`}></ion-icon>
        <ion-icon name={`code-working${segment}`}></ion-icon>
        <ion-icon name={`cut${segment}`}></ion-icon>
        <ion-icon name={`flask${segment}`}></ion-icon>
        <ion-icon name={`hand-left${segment}`}></ion-icon>
        <ion-icon name={`headset${segment}`}></ion-icon>
        <ion-icon name={`library${segment}`}></ion-icon>
      </ion-content>
    ];
  }
}
