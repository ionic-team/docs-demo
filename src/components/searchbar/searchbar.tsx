import { Component, h, Element, State } from '@stencil/core';

@Component({
  tag: 'component-searchbar',
  styleUrl: 'searchbar.css'
})
export class searchbar {
  @Element() el;

  list: HTMLElement;

  cities = [
    'Amsterdam',
    'Bogota',
    'Buenos Aires',
    'Cairo',
    'Dhaka',
    'Edinburgh',
    'Geneva',
    'Genoa',
    'Glasglow',
    'Hanoi',
    'Hong Kong',
    'Islamabad',
    'Istanbul',
    'Jakarta',
    'Kiel',
    'Kyoto',
    'Le Havre',
    'Lebanon',
    'Lhasa',
    'Lima',
    'London',
    'Los Angeles',
    'Madrid',
    'Manila',
    'New York',
    'Olympia',
    'Oslo',
    'Panama City',
    'Peking',
    'Philadelphia',
    'San Francisco',
    'Seoul',
    'Taipeh',
    'Tel Aviv',
    'Tokio',
    'Uelzen',
    'Washington',
  ]

  @State() items = this.cities;

  handleSearch = (event: any) => {
    const query = event.target.value.toLowerCase();
    this.items = this.cities.filter(x => x.toLocaleLowerCase().indexOf(query) >= 0);
  }

  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Searchbar</ion-title>
        </ion-toolbar>
        <ion-toolbar>
          <ion-searchbar onIonInput={this.handleSearch}></ion-searchbar>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-list>
          {this.items.map(item => {
            return (
              <ion-item>
                <ion-label>{item}</ion-label>
              </ion-item>
            );
          })}
        </ion-list>
      </ion-content>
    ];
  }
}
