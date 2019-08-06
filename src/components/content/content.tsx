import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'component-content',
  styleUrl: 'content.css'
})
export class content {
  @Element() el;

  getContent() {
    return this.el.querySelector('ion-content');
  }

  scrollToBottom = () => {
    this.getContent().scrollToBottom(500);
  }

  scrollToTop = () => {
    this.getContent().scrollToTop(500);
  }

  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Content</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen>
        <p class="ion-padding-start ion-padding-end">
          <ion-button onClick={this.scrollToBottom} expand="block" fill="outline">Scroll To Bottom</ion-button>
        </p>
        {new Array(30).fill(0).map((_, i) => {
          return (
            <ion-item>
              <ion-label>Item {i}</ion-label>
            </ion-item>
          );
        })}
        <p class="ion-padding-start ion-padding-end">
          <ion-button onClick={this.scrollToTop} expand="block" fill="outline">Scroll To Top</ion-button>
        </p>
      </ion-content>
    ];
  }
}
