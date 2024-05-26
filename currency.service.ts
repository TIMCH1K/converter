import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface CurrencyResponse {
  Valute: { [key: string]: { Value: number, CharCode: string } };
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'https://www.cbr-xml-daily.ru/daily_json.js';

  constructor(private http: HttpClient) { }

  getCurrencies(): Observable<CurrencyResponse> {
    return this.http.get<CurrencyResponse>(this.apiUrl);
  }
}
