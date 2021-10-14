import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-datetime',
  styleUrl: 'datetime.css'
})
export class Datetime {
  private customDatetime?: HTMLIonDatetimeElement;

  private confirm = () => {
    const { customDatetime } = this;
    if (!customDatetime) return;

    customDatetime.confirm();
  }

  private reset = () => {
    const { customDatetime } = this;
    if (!customDatetime) return;

    customDatetime.reset();
  }

  render() {
    const description = `<b>Datetime</b> presents a calendar interface and time wheel, making it easy for users to select dates and times. Datetimes are similar to the native input elements of <code>datetime-local</code>, however, Ionic's Datetime component makes it easy to display the date and time in the a preferred format, and manage the datetime values.`;
    const url = 'datetime';

    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Date & Time Picker</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen>
        <component-details description={description} url={url}></component-details>

        <div class="ion-padding-start ion-padding-end">
          <div class="grid">
            <div class="grid-item">
              <h2>Initial Value</h2>
              <ion-datetime value="2012-12-15T13:47:20.789"></ion-datetime>
            </div>
            <div class="grid-item">
              <h2>Readonly</h2>
              <ion-datetime readonly={true}></ion-datetime>
            </div>
            <div class="grid-item">
              <h2>Disabled</h2>
              <ion-datetime disabled={true}></ion-datetime>
            </div>
            <div class="grid-item">
              <h2>Custom Locale</h2>
              <ion-datetime locale="en-GB"></ion-datetime>
            </div>
            <div class="grid-item">
              <h2>Max and min</h2>
              <ion-datetime min="1994-03-14" max="2012-12-09" value="2008-09-02"></ion-datetime>
            </div>
            <div class="grid-item">
              <h2>15 minute increments</h2>
              <ion-datetime minuteValues="0,15,30,45"></ion-datetime>
            </div>
            <div class="grid-item">
              <h2>Specific days/months/years</h2>
              <ion-datetime monthValues="6,7,8" yearValues="2014,2015" dayValues="01,02,03,04,05,06,08,09,10,11,12,13,14"></ion-datetime>
            </div>
            <div class="grid-item">
              <h2>Time Only</h2>
              <ion-datetime presentation="time"></ion-datetime>
            </div>
            <div class="grid-item">
              <h2>Time First, Date Second</h2>
              <ion-datetime presentation="time-date"></ion-datetime>
            </div>
            <div class="grid-item">
              <h2>Cover</h2>
              <ion-datetime size="cover"></ion-datetime>
            </div>
            <div class="grid-item">
              <h2>Custom Hour Cycle</h2>
              <ion-datetime hourCycle="h23"></ion-datetime>
            </div>
            <div class="grid-item">
              <h2>Custom First Day Of Week</h2>
              <ion-datetime firstDayOfWeek={1}></ion-datetime>
            </div>
            <div class="grid-item">
              <h2>Custom Title</h2>
              <ion-datetime>
                <div slot="title">My Custom Title</div>
              </ion-datetime>
            </div>
            <div class="grid-item">
              <h2>Clear Button</h2>
              <ion-datetime showClearButton={true}></ion-datetime>
            </div>
            <div class="grid-item">
              <h2>Custom Buttons</h2>
              <ion-datetime ref={el => this.customDatetime = el}>
                <ion-buttons slot="buttons">
                  <ion-button color="primary" onClick={() => this.confirm()}>Good to go!</ion-button>
                  <ion-button color="danger" onClick={() => this.reset()}>Reset</ion-button>
                </ion-buttons>
              </ion-datetime>
            </div>
            <div class="grid-item">
              <h2>Datetime in Overlay</h2>
              <ion-button id="open-modal">Open Datetime Modal</ion-button>
              <ion-modal trigger="open-modal">
                <ion-content forceOverscroll={false}>
                  <ion-datetime></ion-datetime>
                </ion-content>
              </ion-modal>
            </div>
          </div>
        </div>
      </ion-content>
    ];
  }
}
