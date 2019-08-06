import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'component-picker',
  styleUrl: 'picker.css'
})
export class picker {
  @Element() el!: HTMLElement;

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
    const description = `The <b>Picker</b> is a dialog that displays a row of buttons
      and columns underneath. It appears on top of the app's content, and at the bottom
      of the viewport.`;
    const url = 'picker';

    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Picker</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen class="component-content">
        <component-details description={description} url={url}></component-details>

        <div class="ion-padding-start ion-padding-end">
          <ion-button expand="block" onClick={_ => this.openPicker()}>Open Single Column Picker</ion-button>
          <ion-button expand="block" onClick={_ => this.openPicker(2, 5, this.multiColumnOptions)}>Open Multiple Column Picker</ion-button>
        </div>

        <ion-picker-controller></ion-picker-controller>
      </ion-content>,
    ];
  }
}
