import { Component, h, State } from '@stencil/core';
import { toastController } from '@ionic/core';

@Component({
  tag: 'component-input-otp',
  styleUrl: 'input-otp.css'
})
export class InputOtp {
  otpRef: any;

  @State() otpValue: string = '';

  setFocus = () => {
    this.otpRef?.setFocus();
  }

  componentDidLoad() {
    this.setFocus();
  }

  handleOtpComplete = async (event: CustomEvent) => {
    const otp = event.detail.value;

    const toast = await toastController.create({
      message: `Entered OTP: ${otp}`,
      duration: 1000,
      position: 'bottom'
    });

    await toast.present();
    await toast.onDidDismiss();
    this.reset();
  }

  reset = () => {
    if (this.otpRef) {
      this.otpRef.value = '';
    }
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }

  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Input OTP</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <div class="ion-padding ion-text-center">
          <h2>Enter Verification Code</h2>
          <p>Please enter the 4-digit code sent to your device</p>

          <ion-input-otp
            ref={el => (this.otpRef = el)}
            onIonComplete={this.handleOtpComplete}
            separators="2"
            class="ion-margin-top"
          >
            Didn't get the code? <a onClick={() => this.setFocus()}>Resend Code</a>
          </ion-input-otp>
        </div>
      </ion-content>,
    ];
  }
}
