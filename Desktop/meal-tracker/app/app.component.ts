import { Component } from 'angular2/core';

@Component({
  selector: 'food-log',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <h3>{{ food.name }}<br>{{ food.description }}<br>{{ food.calories }}</h3>
  </div>
  `
})

export class AppComponent {
  public food: Food;
  constructor(){
    this.food = new Food("Ceviche", 0, "Octopus, cilantro, lemon, cucumbers", 400);
  }
}

export class Food {
  // public food: Food;
  constructor(public name: string, public id: number, public details: string, public calories: number) {
  }
}
