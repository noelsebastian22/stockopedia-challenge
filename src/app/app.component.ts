import { Component, OnInit } from '@angular/core';
import { SpinnerOverlayService } from './core/services/spinner-overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'stockopedia-challenge';
  constructor() {}
  ngOnInit() {}
}
