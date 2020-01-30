import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { EventEmitter } from 'events';
// import { AppService } from './app.service';
import { Title, Meta } from '@angular/platform-browser';
declare var $: any;

import { TranslateService } from '@ngx-translate/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( public translate: TranslateService ) {
    translate.addLangs(['en', 'fr', 'bn']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|bn|fr/) ? browserLang : 'en')
   }

  title = 'angular-dev';
  private _userId: string = '';
  private _accessToken: string = '';
  public hideForFirstTime: boolean = true;
  public showOrHideLoader: number = -1; // -1 => Do Nothing, 0 => Hide For First Time, 1 => Show Loader, 2 => Hide Loader
  private _siteSettingsData = {};
  public hideHeaderFooter: boolean = false;

  
}
