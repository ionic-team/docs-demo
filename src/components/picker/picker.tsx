import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'component-picker',
  styleUrl: 'picker.css'
})
export class picker {
  @Element() el;
  defaultColumnOptions = [
    [
      'Dog',
      'Cat',
      'Bird',
      'Lizard',
      'Chinchilla'
    ]
  ]

  multiColumnOptions = [
    [
      'Minified',
      'Responsive',
      'Full Stack',
      'Mobile First',
      'Serverless'
    ],
    [
      'Tomato',
      'Avocado',
      'Onion',
      'Potato',
      'Artichoke'
    ]
  ]

  async openPicker(numColumns = 1, numOptions = 5, columnOptions = this.defaultColumnOptions){
    const pickerController = this.el.querySelector('ion-picker-controller');
    const picker = await pickerController.create({
      columns: this.getColumns(numColumns, numOptions, columnOptions),
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: (value) => {
            console.log(`Got Value ${value}`);
          }
        }
      ]
    });

    await picker.present();
  }

  getColumns(numColumns, numOptions, columnOptions) {
    let columns = [];
    for (let i = 0; i < numColumns; i++) {
      columns.push({
        name: `col-${i}`,
        options: this.getColumnOptions(i, numOptions, columnOptions)
      });
    }

    return columns;
  }

  getColumnOptions(columnIndex, numOptions, columnOptions) {
    let options = [];
    for (let i = 0; i < numOptions; i++) {
      options.push({
        text: columnOptions[columnIndex][i % numOptions],
        value: i
      })
    }

    return options;
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Picker</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-picker-controller></ion-picker-controller>
        <ion-button onClick={_ => this.openPicker()}>Open Single Column Picker</ion-button>
        <ion-button onClick={_ => this.openPicker(2, 5, this.multiColumnOptions)}>Open Multi Column Picker</ion-button>
      </ion-content>
    ];
  }
}
