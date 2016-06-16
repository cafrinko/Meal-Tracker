import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
    selector: 'food-display',
    inputs: ['food'],
  template: `
    <h3>{{ food.name }}<br>{{ food.description }}<br>{{ food.calories }}<br><br></h3>
  `
})
export class FoodComponent {
  public food: Food;
}
