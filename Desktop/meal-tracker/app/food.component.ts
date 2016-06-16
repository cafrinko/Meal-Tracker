import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
    selector: 'food-display',
    inputs: ['food'],
  template: `
    <h3>Name of Food: {{ food.name }}<br>Description: {{ food.description }}<br>Calories: {{ food.calories }}<br><br></h3>
  `
})
export class FoodComponent {
  public food: Food;
}
