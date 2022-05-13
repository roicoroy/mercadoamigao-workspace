import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'projects/strapi-auth/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnDestroy, OnInit {
  constructor(
    public titleService: Title,
    private translate: TranslateService,
    private authService: AuthService
  ) {
    // this.translate.use('en-GB');
    this.authService.setDefaultTranslation(translate);

    this.translate.get('page-title').subscribe((title) => {
      this.setTitle(title);
    });

    if (authService.isAuthenticated && !authService.getUser()) {
      this.authService.loadUser();
    }
    this.authService.AuthState.subscribe(() => {
      if (authService.isAuthenticated && !authService.getUser()) {
        this.authService.loadUser();
      }
    });
  }
  public setTitle(newTitle: string): void {
    this.titleService.setTitle(newTitle);
  }
  ngOnInit(): void { }

  ngOnDestroy(): void {
    const test = 't';
  }
}
