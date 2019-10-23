import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'professional-analytics';

  ngOnInit() {
    // firebase.initializeApp({
    //   apiKey: 'AIzaSyC5mumRJQzDo8YYegGxPdor7ohlbqO2CBA',
    //   authDomain: 'professional-analytics.firebaseapp.coms'
    // });
  }

}

