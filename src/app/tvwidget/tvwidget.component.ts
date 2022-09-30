import { Component, Renderer2, OnInit, Inject, Input, AfterContentInit, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-tvwidget',
  templateUrl: './tvwidget.component.html',
  styleUrls: ['./tvwidget.component.css']
})
export class TvwidgetComponent implements AfterViewInit {
  @Input() widgetId: string = 'widget0';

  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) { }
  @Input() parentId: string = '';
  @Input() name: string = '';

  public ngAfterViewInit() {

    let script = this._renderer2.createElement('script');
    script.src = `https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js`;
    script.text = `
    {
      "symbol": "${this.name}",
      "width": "350",
      "height": "220",
      "locale": "en",
      "dateRange": "1M",
      "colorTheme": "dark",
      "trendLineColor": "rgba(41, 98, 255, 1)",
      "underLineColor": "rgba(41, 98, 255, 0.3)",
      "underLineBottomColor": "rgba(41, 98, 255, 0)",
      "isTransparent": true,
      "autosize": false,
      "largeChartUrl": ""
    }
      `;
    console.log(script.text);
    this._renderer2.appendChild(document.getElementById(this.widgetId), script);
  }
}