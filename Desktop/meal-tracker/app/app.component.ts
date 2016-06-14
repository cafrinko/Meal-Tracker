import { Component } from 'angular2/core';

@Component({
  selector: 'food-log',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <h3 *ngFor="#food of foods">{{ food.name }}<br>{{ food.description }}<br>{{ food.calories }}</h3>
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
}

export class Food {
  constructor(public name: string, public id: number, public details: string, public calories: number) {
  }
}
