import { Component, ComponentInterface, h } from '@stencil/core';
import { getComponents } from '../../utils/component-utils';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome implements ComponentInterface {
  components = getComponents();

  private theme: string;

  connectedCallback(): void {
    const config = JSON.parse(window.sessionStorage.getItem('ionic-persist-config')) ?? {};
    this.theme = config.theme;
  }

  toggleDarkMode = () => {
    document.documentElement.classList.toggle('ion-palette-dark');
  }

  /**
   * Changes the theme to the Ionic theme.
   * Prompts the user to reload the page for the changes to take effect.
   */
  toggleIonicTheme = () => {
    const config = JSON.parse(window.sessionStorage.getItem('ionic-persist-config')) ?? {};

    if (config.theme === 'ionic') {
      window.sessionStorage.removeItem('ionic-persist-config');
    } else {
      window.sessionStorage.setItem('ionic-persist-config', JSON.stringify({
        ...config,
        theme: 'ionic'
      }));
    }
    const confirm = window.confirm('Please reload the page for the changes to take effect.');
    if (confirm) {
      window.location.reload();
    }
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
            <ion-toggle onIonChange={this.toggleDarkMode}>
              Dark Mode
            </ion-toggle>
          </ion-item>
          <ion-item>
            <ion-icon slot="start" icon="logo-ionic" class="component-icon component-icon-dark"></ion-icon>
            <ion-toggle onIonChange={this.toggleIonicTheme} checked={this.theme === 'ionic'}>
              Ionic Theme
            </ion-toggle>
          </ion-item>
        </ion-list>


        <ion-list class="home-list">
          {this.components.map(component => {
            const href = component.id === 'tabs' ? '/component/tabs/music' : `/component/${component.id}`;

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
