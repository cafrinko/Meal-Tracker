import { Component, EventEmitter } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
  selector: 'food-log',
  directives: [FoodListComponent],
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <food-list [foodList]="foods" (onFoodSelect)="foodWasSelected($event)"></food-list>
  </div>
  `
})

export class AppComponent {
  public foods: Food[];
  constructor(){
    this.foods = [
      new Food("Ceviche", 0, "Octopus, cilantro, lemon, cucumbers", 400),
      new Food("Pie", 1, "Coconut cream, cacao, almonds, maple syrup", 550)
    ];
  }
  foodWasSelected(clickedFood: Food): void {
    console.log('parent', clickedFood);
  }
}
