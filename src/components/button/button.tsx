import { Component, h } from "@stencil/core";

@Component({
  tag: "component-button",
  styleUrl: "button.css",
})
export class Button {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Button</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <section>
          <ion-list-header>
            <ion-label>Colors</ion-label>
          </ion-list-header>
          <div class="content">
            <ion-button color="success">Success</ion-button>
            <ion-button color="warning">Warning</ion-button>
            <ion-button color="danger">Danger</ion-button>
            <ion-button color="secondary">Secondary</ion-button>
            <ion-button color="tertiary">Tertiary</ion-button>
            <ion-button color="light">Light</ion-button>
            <ion-button color="medium">Medium</ion-button>
            <ion-button color="dark">Dark</ion-button>
          </div>
        </section>

        <section>
          <ion-list-header>
            <ion-label>Sizes</ion-label>
          </ion-list-header>
          <div class="content">
            <ion-button size="small">Small</ion-button>
            <ion-button>Default</ion-button>
            <ion-button size="large">Large</ion-button>
            <ion-button size="xlarge">XLarge</ion-button>
          </div>
        </section>

        <section>
          <ion-list-header>
            <ion-label>Shapes</ion-label>
          </ion-list-header>
          <div class="content">
            <ion-button>Default</ion-button>
            <ion-button shape="round">Round</ion-button>
            <ion-button shape="rectangular">Rectangular</ion-button>
            <ion-button shape="round">
              <ion-icon slot="icon-only" icon="heart"></ion-icon>
            </ion-button>
          </div>
        </section>

        <section>
          <ion-list-header>
            <ion-label>Fills</ion-label>
          </ion-list-header>
          <div class="content">
            <ion-button>Default</ion-button>
            <ion-button fill="outline">Outline</ion-button>
            <ion-button fill="solid">Solid</ion-button>
            <ion-button fill="clear">Clear</ion-button>
          </div>
        </section>

        <section>
          <ion-list-header>
            <ion-label>States - Activated</ion-label>
          </ion-list-header>
          <div class="content">
            <ion-button theme="ionic" class="ion-activated">
              Activated - Solid
            </ion-button>
            <ion-button theme="ionic" class="ion-activated">
              <ion-icon slot="icon-only" name="rocket"></ion-icon>
            </ion-button>
            <ion-button theme="ionic" fill="outline" class="ion-activated">
              Activated - Outline
            </ion-button>
            <ion-button theme="ionic" fill="outline" class="ion-activated">
              <ion-icon slot="icon-only" name="rocket"></ion-icon>
            </ion-button>
            <ion-button theme="ionic" fill="clear" class="ion-activated">
              Activated - Clear
            </ion-button>
            <ion-button theme="ionic" fill="clear" class="ion-activated">
              <ion-icon slot="icon-only" name="rocket"></ion-icon>
            </ion-button>
          </div>
        </section>

        <section>
          <ion-list-header>
            <ion-label>States - Focused</ion-label>
          </ion-list-header>
          <div class="content">
            <ion-button theme="ionic" class="ion-focused">
              Focuseded
            </ion-button>
            <ion-button theme="ionic" class="ion-focused">
              <ion-icon slot="icon-only" name="rocket"></ion-icon>
            </ion-button>
            <ion-button theme="ionic" fill="outline" class="ion-focused">
              Focused - Outline
            </ion-button>
            <ion-button theme="ionic" fill="outline" class="ion-focused">
              <ion-icon slot="icon-only" name="rocket"></ion-icon>
            </ion-button>
            <ion-button theme="ionic" fill="clear" class="ion-focused">
              Clear - Outline
            </ion-button>
            <ion-button theme="ionic" fill="clear" class="ion-focused">
              <ion-icon slot="icon-only" name="rocket"></ion-icon>
            </ion-button>
          </div>
        </section>

        <section>
          <ion-list-header>
            <ion-label>States - Disabled</ion-label>
          </ion-list-header>
          <div class="content">
            <ion-button theme="ionic" disabled="true">
              Disabled
            </ion-button>
            <ion-button theme="ionic" disabled="true">
              <ion-icon slot="icon-only" name="rocket"></ion-icon>
            </ion-button>
            <ion-button theme="ionic" fill="outline" disabled="true">
              Disabled - Outline
            </ion-button>
            <ion-button theme="ionic" fill="outline" disabled="true">
              <ion-icon slot="icon-only" name="rocket"></ion-icon>
            </ion-button>
            <ion-button theme="ionic" fill="clear" disabled="true">
              Disabled - Clear
            </ion-button>
            <ion-button theme="ionic" fill="clear" disabled="true">
              <ion-icon slot="icon-only" name="rocket"></ion-icon>
            </ion-button>
          </div>
        </section>

        <section>
          <ion-list-header>
            <ion-label>Block Width</ion-label>
          </ion-list-header>
          <ion-button class="ion-text-wrap" expand="block">
            A block button
          </ion-button>
        </section>

        <section>
          <ion-list-header>
            <ion-label>Full Width</ion-label>
          </ion-list-header>
          <ion-button class="ion-text-wrap" expand="full" color="secondary">
            A full-width button
          </ion-button>
        </section>
      </ion-content>,
    ];
  }
}
