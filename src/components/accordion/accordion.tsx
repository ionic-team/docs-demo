import { Component, h } from '@stencil/core';
import { toastController } from '@ionic/core';

@Component({
  tag: 'component-accordion',
  styleUrl: 'accordion.css'
})
export class Accordion {
  private accordionGroupRef?: HTMLIonAccordionGroupElement;

  private closeAccordions = () => {
    const { accordionGroupRef } = this;
    if (!accordionGroupRef) return;

    accordionGroupRef.value = undefined;
  }

  private logAccordionGroup = async () => {
    const { accordionGroupRef } = this;
    if (!accordionGroupRef) return;

    const toast = await toastController.create({
      message: `Active Accordion: ${accordionGroupRef.value}`,
      duration: 5000
    });

    await toast.present();
  }

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

        <ion-list inset={true}>
          <ion-list-header>Basic</ion-list-header>
          <ion-accordion-group>
            <ion-accordion value="colors">
              <ion-item slot="header" color="primary">
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
              <ion-item slot="header" color="success">
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
              <ion-item slot="header" color="danger">
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
        </ion-list>

        <ion-list inset={true}>
          <ion-list-header>Custom Icon</ion-list-header>
          <ion-accordion-group>
            <ion-accordion value="colors" toggle-icon="arrow-down-circle">
              <ion-item slot="header" color="primary">
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
            <ion-accordion value="shapes" toggle-icon="arrow-down-circle">
              <ion-item slot="header" color="success">
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
            <ion-accordion value="numbers" toggle-icon="arrow-down-circle">
              <ion-item slot="header" color="danger">
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
        </ion-list>

        <ion-list inset={true}>
          <ion-list-header>Open Accordion</ion-list-header>
          <ion-accordion-group value="colors">
            <ion-accordion value="colors">
              <ion-item slot="header" color="primary">
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
              <ion-item slot="header" color="success">
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
              <ion-item slot="header" color="danger">
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
        </ion-list>

        <ion-list inset={true}>
          <ion-list-header>Multiple Accordions</ion-list-header>
          <ion-accordion-group multiple={true} id="multiple">
            <ion-accordion value="colors">
              <ion-item slot="header" color="primary">
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
              <ion-item slot="header" color="success">
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
              <ion-item slot="header" color="danger">
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
        </ion-list>

        <ion-list inset={true}>
          <ion-list-header>Managing State</ion-list-header>
          <ion-accordion-group value="numbers" ref={el => this.accordionGroupRef = el}>
            <ion-accordion value="colors">
              <ion-item slot="header" color="primary">
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
              <ion-item slot="header" color="success">
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
              <ion-item slot="header" color="danger">
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
        </ion-list>

        <div class="ion-padding-start ion-padding-end ion-padding-bottom">
          <ion-button expand="block" onClick={this.logAccordionGroup}>Log Value of Accordion Group</ion-button>
          <ion-button expand="block" onClick={this.closeAccordions}>Close Accordion</ion-button>
        </div>
      </ion-content>
    ];
  }
}
