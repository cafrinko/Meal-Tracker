import { Component } from 'angular2/core';

@Component({
  selector: 'food-log',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <h5 *ngFor="#food of foods" (click)="foodWasSelected(food)">{{ food.name }}<br>{{ food.description }}<br>{{ food.calories }}<br><br></h5>
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
    console.log(clickedFood);
  }
}

export class Food {
  constructor(public name: string, public id: number, public description: string, public calories: number) {
  }
}
