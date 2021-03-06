import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ModalController } from 'ionic-angular';

import { RegistrationPage } from '../../pages/registration/registration';

/*
  Generated class for the ModalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ModalProvider {

  constructor(public http: HttpClient, public modalCtrl: ModalController) {
    console.log('Hello ModalProvider Provider');
  }

  registrationModal: any;

  presentRegistrationModal() {
    this.registrationModal = this.modalCtrl.create(RegistrationPage);
    this.registrationModal.present();
  }

  dismissRegistrationModal() {
    this.registrationModal.dismiss();
  }
}
