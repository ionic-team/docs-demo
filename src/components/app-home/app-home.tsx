import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
  components = [
    { name: 'Action Sheet', icon: '', id: 'action-sheet' },
    { name: 'Alert', icon: '', id: 'alert' },
    { name: 'Badge', icon: '', id: 'badge' },
    { name: 'Button', icon: '', id: 'button' },
    { name: 'Card', icon: '', id: 'card' },
    { name: 'Checkbox', icon: '', id: 'checkbox' },
    { name: 'Chip', icon: '', id: 'chip' },
    { name: 'Content', icon: '', id: 'content' },
    { name: 'Date/time Picker', icon: '', id: 'datetime' },
    { name: 'Floating Action Button (FAB)', icon: '', id: 'fab' },
    { name: 'Grid', icon: '', id: 'grid' },
    { name: 'Icons', icon: '', id: 'icons' },
    { name: 'Infinite Scroll', icon: '', id: 'infinite-scroll' },
    { name: 'Input', icon: '', id: 'input' },
    { name: 'List', icon: '', id: 'list' },
    { name: 'List Item', icon: '', id: 'list-item' },
    { name: 'Loading', icon: '', id: 'loading' },
    { name: 'Menu', icon: '', id: 'menu' },
    { name: 'Modal', icon: '', id: 'modal' },
    { name: 'Navigation', icon: '', id: 'nav' },
    { name: 'Popover', icon: '', id: 'popover' },
    { name: 'Progress Indicators', icon: '', id: 'progress' },
    { name: 'Radio', icon: '', id: 'radio' },
    { name: 'Range', icon: '', id: 'range' },
    { name: 'Refresher', icon: '', id: 'refresher' },
    { name: 'Reorder', icon: '', id: 'reorder' },
    { name: 'Routing', icon: '', id: 'routing' },
    { name: 'Searchbar', icon: '', id: 'searchbar' },
    { name: 'Segment', icon: '', id: 'segment' },
    { name: 'Select', icon: '', id: 'select' },
    { name: 'Slides', icon: '', id: 'slides' },
    { name: 'Tabs', icon: '', id: 'tabs' },
    { name: 'Toast', icon: '', id: 'toast' },
    { name: 'Toggle', icon: '', id: 'toggle' },
    { name: 'Toolbar', icon: '', id: 'toolbar' },
  ]

  toggleDarkMode = () => {
    document.body.classList.toggle('dark');
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
          <ion-item>
            <ion-icon slot="start"></ion-icon>
            <ion-label>
              Dark Mode
            </ion-label>
            <ion-toggle slot="end" onIonChange={this.toggleDarkMode}/>
          </ion-item>
        </ion-list>
        <ion-list>
          {this.components.map(component => {
            return (
              <ion-item href={`/component/${component.id}`}>
                <ion-icon slot="start"></ion-icon>
                <ion-label>{component.name}</ion-label>
              </ion-item>
            );
          })}
        </ion-list>
      </ion-content>
    ];
  }
}
