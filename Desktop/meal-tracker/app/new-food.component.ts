import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
    <div class="new-food">
      <h3>Create Food:</h3>
      <input placeholder="Name" class="col-sm-8 input-lg" #newName>
      <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
      <input placeholder="Calories" class="col-sm-8 input-lg" #newCalories>
      <button (click)="addFood(newName, newDescription, newCalories)" class="btn-success btn-lg add-button">Add</button>
    </div>
  `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Food>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(userName: HTMLInputElement, userDescription: HTMLInputElement, userCalories: HTMLInputElement){
  var newFood = new Food(userName.value, 0, userDescription.value, parseInt(userCalories.value))
    this.onSubmitNewFood.emit(newFood);
    userName.value = "";
    userDescription.value = "";
    userCalories.value = "";
  }
}
