import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ModalAddTaskPage } from './modal/modal-addTask';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public modalCtrl: ModalController) {

  }

  openModal() {
    let modal = this.modalCtrl.create(ModalAddTaskPage);
    modal.present();
  }
}
