import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class CryptoService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,LTC,BCH,ETC&tsyms=USD,GBP,EUR,JPY,ZAR',
      // params: {
      //   APPID: 'c12bdbbf56bfc35592a66988f9acd4a1',
      // },
    });
  }

  async bcbCrypto(): Promise<object> {
    const response = await this.client.get('cryptocurrency');
    return response.data;
  }
}
