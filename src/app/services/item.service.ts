import { Item } from './../../models/item.models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() {}

  items: Array<Item> = [
    {
      id: "1",
      name: "Burger 1",
      price: 10000,
      stock: 5,
      quantity: 0,
      photoURL: "https://burgerking.vn/media/catalog/product/cache/1/small_image/316x/9df78eab33525d08d6e5fb8d27136e95/t/a/takesumi_bg.jpg"
    },

    {
      id: "2",
      name: "Burger 2",
      price: 20000,
      stock: 10,
      quantity: 0,
      photoURL: "https://burgerking.vn/media/catalog/product/cache/1/small_image/316x/9df78eab33525d08d6e5fb8d27136e95/t/a/takesumi_bg.jpg"
    },

    {
      id: "3",
      name: "Burger 3",
      price: 30000,
      stock: 0,
      quantity: 0,
      photoURL: "https://burgerking.vn/media/catalog/product/cache/1/small_image/316x/9df78eab33525d08d6e5fb8d27136e95/t/a/takesumi_bg.jpg"
    },
  ]
}
