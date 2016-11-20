import { Component } from '@angular/core';
import { StocksService } from './stocks.service';

@Component({
  moduleId: module.id,
  selector: 'mp-stocks',
  templateUrl: 'stocks.component.html',
  styleUrls: ['stocks.component.css'],
  providers: [StocksService]
})

export class StocksComponent {
  stocks:any[] = [];

  constructor(private stocksService: StocksService) {
    stocksService.data$.subscribe(
      data => this.stocks = data
    );

    stocksService.load(['YHOO']);
  }
}
