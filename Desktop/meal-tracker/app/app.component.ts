import { Component, EventEmitter } from 'angular2/core';

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

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [FoodComponent],
  template: `
  <food-display *ngFor="#currentFood of foodList" (click)="foodClicked(currentFood)"
    [class.selected]="currentFood === selectedFood" [food]="currentFood">
  </food-display>
  `
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

export class Food {
  constructor(public name: string, public id: number, public description: string, public calories: number) {
  }
}
