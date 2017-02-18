import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  templateUrl: 'notice.html'
})
export class NoticePage {
  notices: Array<{title: string, message: string}>;

  constructor(private http:Http) {
    this.notices = [];
    this.getNotices()
  }

  getNotices() {
    let url = 'https://newsapi.org/v1/articles?apiKey=56cb1242b0ae458795a7a45842e65ea2&source=google-news';
    return this.http.get(url)
      .subscribe(data => {
        let articles = data.json().articles;
        for (let i = 0; i < articles.length; i++) {
          this.notices.push({
            title: articles[i].title,
            message: articles[i].description
          });
        }
      });
  }

  // openModal() {
  //   let modal = this.modalCtrl.create(ModalAddTaskPag);
  //   modal.present();
  // }
}
