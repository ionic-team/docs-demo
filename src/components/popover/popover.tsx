import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'component-popover',
  styleUrl: 'popover.css'
})
export class popover {
  @Element() el;

  showPopover = async (event: MouseEvent) => {
    const controller = this.el.querySelector('ion-popover-controller');
    const popover = await controller.create({
      component: 'popover-example-page',
      event: event,
      translucent: true
    });
    return popover.present();
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Popover</ion-title>
          <ion-buttons slot="end">
            <ion-popover-controller></ion-popover-controller>
            <ion-button slot="end" onClick={this.showPopover}>Show</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
      </ion-content>
    ];
  }
}
