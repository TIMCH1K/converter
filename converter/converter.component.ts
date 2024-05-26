import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  currencies: { [key: string]: { Value: number, CharCode: string } } = {};
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  amount: number = 1;
  convertedAmount: number = 0;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getCurrencies().subscribe(data => {
      this.currencies = data.Valute;
    });
  }

  convert() {
    const fromRate = this.currencies[this.fromCurrency].Value;
    const toRate = this.currencies[this.toCurrency].Value;
    this.convertedAmount = (this.amount * fromRate) / toRate;
  }

  objectKeys = Object.keys;
}
