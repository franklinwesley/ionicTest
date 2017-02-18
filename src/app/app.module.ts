import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ModalAddTaskPage } from '../pages/home/modal/modal-addTask';
import { NoticePage } from '../pages/notice/notice';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalAddTaskPage,
    NoticePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalAddTaskPage,
    NoticePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
