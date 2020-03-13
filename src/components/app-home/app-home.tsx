import { Component, h } from '@stencil/core';
import { getComponents } from '../../utils/component-utils';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
  components = getComponents();

  toggleDarkMode = () => {
    document.body.classList.toggle('dark');
  }

  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-title>Ionic Framework</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Ionic Framework</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-list class="theme-list" lines="full">
          <ion-item>
            <ion-icon slot="start" icon="moon" class="component-icon component-icon-dark"></ion-icon>
            <ion-label>
              Dark Mode
            </ion-label>
            <ion-toggle slot="end" onIonChange={this.toggleDarkMode}></ion-toggle>
          </ion-item>
        </ion-list>

        <ion-list class="home-list">
          {this.components.map(component => {
            const href = component.id === 'tabs' ? `/component/tabs/music` : `/component/${component.id}`;

            return (
              <ion-item href={href}>
                <ion-icon slot="start" icon={component.icon} class="component-icon component-icon-primary"></ion-icon>
                <ion-label>{component.name}</ion-label>
              </ion-item>
            );
          })}
        </ion-list>
      </ion-content>
    ];
  }
}
