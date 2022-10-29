import { Item } from './../../../models/item.models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor() { }

  @Input() item!: Item

  ngOnInit(): void {
  }

  incre(){
    if(this.item.stock > 0){
      if(this.item.quantity >= this.item.stock){
        return;
      }
      this.item.quantity++;
    }
    console.log(this.item.quantity);
  }

  decre(){
    if(this.item.stock <= 0 || this.item.quantity == 0){
      return;
    }
    this.item.quantity--;
  }

  purchase(){
    let rs = this.item.quantity * this.item.price;
    console.log(rs);
    return rs;

  }
}
