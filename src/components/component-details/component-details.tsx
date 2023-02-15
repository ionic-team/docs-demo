import { Component, Prop, h } from '@stencil/core';
import { _template_ } from '../_template_/_template_';

@Component({
  tag: 'component-details',
  styleUrl: 'component-details.css'
})
/**
 * This component is useful for providing a top section in the component page
 * to describe what the component is and link to the Component & API docs.
 */
export class ComponentDetails {
  @Prop() description: string;

  @Prop() url: string;

  render() {
    const { url, description } = this;

    const name = url.replace('-', ' ');

    return (
      <ion-list>
        <ion-item lines="full">
          <ion-label class="component-description">
            <span innerHTML={ description }></span>
          </ion-label>
        </ion-item>
        <ion-item class="component-link" href={`https://ionicframework.com/docs/api/${url}`} target="_blank">
          <ion-label color="primary">
            { name } API Docs
          </ion-label>
        </ion-item>
        <ion-item lines="full" class="component-link" href="https://ionicframework.com/docs/components" target="_blank">
          <ion-label color="primary">
            UI Component Docs
          </ion-label>
        </ion-item>
      </ion-list>
    );
  }
}
