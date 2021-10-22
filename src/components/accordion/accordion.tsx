import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-accordion',
  styleUrl: 'accordion.css'
})
export class Accordion {

  render() {
    const description = `<b>Accordions</b> provide collapsible sections in your content to reduce vertical space while providing a way of organizing and grouping information. All <code>ion-accordion</code> components should be grouped inside <code>ion-accordion-group</code> components.`;
    const url = 'accordion';

    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Accordion</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen class="component-content">
        <component-details description={description} url={url}></component-details>

        <ion-accordion-group>
          <ion-accordion value="colors">
            <ion-item slot="header">
              <ion-label>Colors</ion-label>
            </ion-item>

            <ion-list slot="content">
              <ion-item>
                <ion-label>Red</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Green</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Blue</ion-label>
              </ion-item>
            </ion-list>
          </ion-accordion>
          <ion-accordion value="shapes">
            <ion-item slot="header">
              <ion-label>Shapes</ion-label>
            </ion-item>

            <ion-list slot="content">
              <ion-item>
                <ion-label>Circle</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Triangle</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Square</ion-label>
              </ion-item>
            </ion-list>
          </ion-accordion>
          <ion-accordion value="numbers">
            <ion-item slot="header">
              <ion-label>Numbers</ion-label>
            </ion-item>

            <ion-list slot="content">
              <ion-item>
                <ion-label>1</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>2</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>3</ion-label>
              </ion-item>
            </ion-list>
          </ion-accordion>
        </ion-accordion-group>
      </ion-content>
    ];
  }
}
