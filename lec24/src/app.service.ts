import { Injectable } from '@nestjs/common';
import { run } from 'node:test';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getWishlistByLang(lang){
    const wishlist = {
      ru: [{ id: 1, name: "наушники", price: 49.99 }],
      en: [{ id: 2, name: "Wireless Headphones", price: 49.99 }],
      ger: [{ id: 3, name: "Smartwatch", price: 199.99 }],
      fr: [{ id: 4, name: "Montre connectée", price: 199.99 }],
      it: [{ id: 5, name: "Cuffie wireless", price: 49.99 }]
    };
    return wishlist[lang];
  }
}
