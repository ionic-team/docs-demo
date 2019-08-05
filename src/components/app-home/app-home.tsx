import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
  components = [
    { name: 'Action Sheet', icon: 'radio-button-off', id: 'action-sheet' },
    { name: 'Alert', icon: 'radio-button-off', id: 'alert' },
    { name: 'Avatar', icon: 'radio-button-off', id: 'avatar' },
    { name: 'Badge', icon: 'radio-button-off', id: 'badge' },
    { name: 'Button', icon: 'radio-button-off', id: 'button' },
    { name: 'Card', icon: 'radio-button-off', id: 'card' },
    { name: 'Checkbox', icon: 'radio-button-off', id: 'checkbox' },
    { name: 'Chip', icon: 'radio-button-off', id: 'chip' },
    { name: 'Content', icon: 'radio-button-off', id: 'content' },
    { name: 'Datetime', icon: 'radio-button-off', id: 'datetime' },
    { name: 'Floating Action Button (FAB)', icon: 'radio-button-off', id: 'fab' },
    { name: 'Grid', icon: 'radio-button-off', id: 'grid' },
    { name: 'Icons', icon: 'radio-button-off', id: 'icons' },
    { name: 'Infinite Scroll', icon: 'radio-button-off', id: 'infinite-scroll' },
    { name: 'Input', icon: 'radio-button-off', id: 'input' },
    { name: 'List', icon: 'radio-button-off', id: 'list' },
    { name: 'List Item', icon: 'radio-button-off', id: 'list-item' },
    { name: 'Loading', icon: 'radio-button-off', id: 'loading' },
    { name: 'Menu', icon: 'radio-button-off', id: 'menu' },
    { name: 'Modal', icon: 'radio-button-off', id: 'modal' },
    { name: 'Navigation', icon: 'radio-button-off', id: 'nav' },
    { name: 'Note', icon: 'radio-button-off', id: 'note' },
    { name: 'Picker', icon: 'radio-button-off', id: 'picker' },
    { name: 'Popover', icon: 'radio-button-off', id: 'popover' },
    { name: 'Progress Indicators', icon: 'radio-button-off', id: 'progress' },
    { name: 'Radio', icon: 'radio-button-off', id: 'radio' },
    { name: 'Range', icon: 'radio-button-off', id: 'range' },
    { name: 'Refresher', icon: 'radio-button-off', id: 'refresher' },
    { name: 'Reorder', icon: 'radio-button-off', id: 'reorder' },
    { name: 'Routing', icon: 'radio-button-off', id: 'routing' },
    { name: 'Searchbar', icon: 'radio-button-off', id: 'searchbar' },
    { name: 'Segment', icon: 'radio-button-off', id: 'segment' },
    { name: 'Select', icon: 'radio-button-off', id: 'select' },
    { name: 'Skeleton Text', icon: 'radio-button-off', id: 'skeleton-text' },
    { name: 'Slides', icon: 'radio-button-off', id: 'slides' },
    { name: 'Tabs', icon: 'radio-button-off', id: 'tabs' },
    { name: 'Text', icon: 'radio-button-off', id: 'text' },
    { name: 'Thumbnail', icon: 'radio-button-off', id: 'thumbnail' },
    { name: 'Toast', icon: 'radio-button-off', id: 'toast' },
    { name: 'Toggle', icon: 'radio-button-off', id: 'toggle' },
    { name: 'Toolbar', icon: 'radio-button-off', id: 'toolbar' },
  ]

  componentWillLoad() {
    if (this.isChecked()) {
      this.toggleDarkMode();
    }
  }

  toggleDarkMode = () => {
    document.body.classList.toggle('dark');
  }

  isChecked = () => {
    const theme = getComputedStyle(document.body).getPropertyValue('--ion-color-scheme').trim();

    return theme === 'dark';
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-title>Ionic Framework</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-list>
          <ion-item lines="none">
            <ion-icon slot="start" icon="contrast"></ion-icon>
            <ion-label>
              Dark Mode
            </ion-label>
            <ion-toggle slot="end" onIonChange={this.toggleDarkMode} checked={this.isChecked()}></ion-toggle>
          </ion-item>
        </ion-list>

        <ion-list>
          {this.components.map(component => {
            const href = component.id === 'tabs' ? `/component/tabs/music` : `/component/${component.id}`;

            return (
              <ion-item href={href}>
                <ion-icon slot="start" icon={component.icon} color="primary"></ion-icon>
                <ion-label>{component.name}</ion-label>
              </ion-item>
            );
          })}
        </ion-list>
      </ion-content>
    ];
  }
}
