import { Component } from '@angular/core';
import {ItemService} from './services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BurgerKing';
  constructor(protected itemService: ItemService){

  }
}


