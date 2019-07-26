import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {
  components = [
    { name: 'Action Sheet', id: 'action-sheet' },
    { name: 'Alert', id: 'alert' },
    { name: 'Avatar', id: 'avatar' },
    { name: 'Badge', id: 'badge' },
    { name: 'Button', id: 'button' },
    { name: 'Card', id: 'card' },
    { name: 'Checkbox', id: 'checkbox' },
    { name: 'Chip', id: 'chip' },
    { name: 'Content', id: 'content' },
    { name: 'Date/time Picker', id: 'datetime' },
    { name: 'Floating Action Button (FAB)', id: 'fab' },
    { name: 'Grid', id: 'grid' },
    { name: 'Icons', id: 'icons' },
    { name: 'Infinite Scroll', id: 'infinite-scroll' },
    { name: 'Input', id: 'input' },
    { name: 'List', id: 'list' },
    { name: 'List Item', id: 'list-item' },
    { name: 'Loading', id: 'loading' },
    { name: 'Menu', id: 'menu' },
    { name: 'Modal', id: 'modal' },
    { name: 'Navigation', id: 'nav' },
    { name: 'Note', id: 'note' },
    { name: 'Picker', id: 'picker' },
    { name: 'Popover', id: 'popover' },
    { name: 'Progress Indicators', id: 'progress' },
    { name: 'Radio', id: 'radio' },
    { name: 'Range', id: 'range' },
    { name: 'Refresher', id: 'refresher' },
    { name: 'Reorder', id: 'reorder' },
    { name: 'Routing', id: 'routing' },
    { name: 'Searchbar', id: 'searchbar' },
    { name: 'Segment', id: 'segment' },
    { name: 'Select', id: 'select' },
    { name: 'Skeleton Text', id: 'skeleton-text' },
    { name: 'Slides', id: 'slides' },
    { name: 'Tabs', id: 'tabs' },
    { name: 'Toast', id: 'toast' },
    { name: 'Toggle', id: 'toggle' },
    { name: 'Toolbar', id: 'toolbar' },
  ]

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
          {this.components.map(component => {
            return (
              <ion-route url={`/component/${component.id}`} component={`component-${component.id}`} />
            );
          })}
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
