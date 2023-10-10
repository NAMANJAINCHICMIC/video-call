import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SocketCommunicationService } from './shared/services/socket-communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'video-call';
  constructor(
    private translate: TranslateService,
    private socketComm: SocketCommunicationService
  ) {
    this.translate.addLangs(['en', 'es', 'zh', 'hi', 'pt']);
    this.translate.setDefaultLang('en');
  }
}
