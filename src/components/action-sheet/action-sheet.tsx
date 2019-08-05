import { Component, Prop, h } from '@stencil/core';

import { Config } from '@ionic/core';

@Component({
  tag: 'component-action-sheet',
  styleUrl: 'action-sheet.css'
})
export class ActionSheet {
  mode!: string;

  @Prop({ context: 'config' }) config: Config;

  controller: HTMLIonActionSheetControllerElement;

  open = async () => {
    const mode = this.config.get('mode');

    await this.controller.componentOnReady();

    const actionSheet = await this.controller.create({
      header: "Albums",
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: mode !== 'ios' ? 'trash' : null,
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: mode !== 'ios' ? 'share' : null,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: mode !== 'ios' ? 'arrow-dropright-circle' : null,
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: mode !== 'ios' ? 'heart' : null,
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: mode !== 'ios' ? 'close' : null,
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  render() {
    const description = `The <b>Action Sheet</b> is a dialog that displays a set of options. It appears on
      top of the app’s content, and must be manually dismissed by the user before they can
      resume interaction with the app. There are multiple ways to dismiss the action sheet,
      including tapping the backdrop or hitting the escape key.`;
    const url = 'action-sheet';

    return [
      <ion-action-sheet-controller ref={e => { this.controller = e }} />,
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Action Sheet</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen class="component-content">
        <component-details description={description} url={url}></component-details>

        <div class="ion-padding-start ion-padding-end">
          <ion-button expand="block" onClick={this.open}>Open Action Sheet</ion-button>
        </div>
      </ion-content>
    ];
  }
}
