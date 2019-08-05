import { Component, Prop, h } from '@stencil/core';

/**
 * This component is useful for providing a top section in the component page
 * to describe what the component is and link to the Component & API docs.
 */
@Component({
  tag: 'component-details',
  styleUrl: 'component-details.css'
})
export class ComponentDetails {
  @Prop() description: string;

  @Prop() url: string;

  render() {
    const { url, description } = this;

    return (
      <ion-list>
        <ion-item>
          <ion-label class="component-description">
            <span innerHTML={ description }></span>
          </ion-label>
        </ion-item>
        <ion-item class="component-link" href="https://ionicframework.com/docs/components" target="_blank">
          <ion-label color="primary">
            Component Docs
          </ion-label>
        </ion-item>
        <ion-item lines="full" class="component-link" href={`https://ionicframework.com/docs/api/${url}`} target="_blank">
          <ion-label color="primary">
            API
          </ion-label>
        </ion-item>
      </ion-list>
    );
  }
}
