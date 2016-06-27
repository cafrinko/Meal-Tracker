import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
    <div class="edit-food">
      <h3>Edit Food: </h3>
      <input [(ngModel)]="food.name" class="col-sm-8 input-sm edit-food"/>
      <input [(ngModel)]="food.description" class="col-sm-8 input-sm edit-food"/>
      <input [(ngModel)]="food.calories" class="col-sm-8 input-sm edit-food"/>
    </div>
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
}
