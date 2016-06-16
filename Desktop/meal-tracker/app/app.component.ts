import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  template: `
  <h3 *ngFor="#currentFood of foodList" (click)="foodClicked (currentFood)">
    {{ currentFood.name }}<br>{{ currentFood.description }}<br>{{ currentFood.calories }}<br><br>
  </h3>
  `
})
export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    console.log('child', clickedFood);
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
