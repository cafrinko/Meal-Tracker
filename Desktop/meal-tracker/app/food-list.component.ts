import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';
import { EditFoodDetailsComponent } from './edit-food-details.component';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [FoodComponent, EditFoodDetailsComponent],
  templateUrl: 'app/food-list.component.html'
})
export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    console.log('child', clickedFood);
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
}
