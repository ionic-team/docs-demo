import { Component, h } from '@stencil/core';

@Component({
  tag: 'action-sheet',
  styleUrl: 'action-sheet.css'
})
export class ActionSheet {
  open = async () => {
    let actionSheetController = document.querySelector('ion-action-sheet-controller');
    if (!actionSheetController) {
      actionSheetController = document.createElement('ion-action-sheet-controller');
      document.body.appendChild(actionSheetController);
    }
    await actionSheetController.componentOnReady();

    const actionSheet = await actionSheetController.create({
      header: "Albums",
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Action Sheet</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-button onClick={this.open}>Open</ion-button>
      </ion-content>
    ];
  }
}
