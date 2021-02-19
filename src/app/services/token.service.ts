import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}
  setWithExpiry(key, value, ttl) {
    const now = new Date();

    const item = {
      value: value,
      expiry: now.getTime() + ttl * 1000,
    };
    localStorage.setItem(key, JSON.stringify(item));
  }
  getWithExpiry(key) {
    const itemStr = localStorage.getItem(key);

    if (!itemStr) {
      return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  }
}
