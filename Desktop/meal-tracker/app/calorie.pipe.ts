import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe({
  name: "calorie",
  pure: false
})
export class CaloriePipe implements PipeTransform {
  transform(input: Food[], args) {
    console.log('selected food: ', args[1]);
    var desiredCalorieState = args[0];
    if(desiredCalorieState === "high") {
      return input.filter(function(food) {
        return food.calories >= 500;
      });
    } else if (desiredCalorieState === "low") {
        return input.filter(function(food) {
          return food.calories < 500;
      });
    } else {
      return input;
    }
  }
}
