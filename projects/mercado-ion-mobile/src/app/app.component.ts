import { Component, OnDestroy, OnInit } from '@angular/core';
import { LanguageService } from './shared/services/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnDestroy, OnInit {
  constructor(
    private language: LanguageService,
  ) {
    this.initializeApp();
   }
  async initializeApp() {

    try {
      // await SplashScreen.hide();
      // await StatusBar.setStyle({ style: Style.Dark });
      this.language.initTranslate();
    // eslint-disable-next-line no-empty
    } catch (err) {}
  }
  ngOnInit(): void { }

  ngOnDestroy(): void {
  }
}
