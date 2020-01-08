import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'description test', 'https://assets.epicurious.com/photos/560dd78bf9a84192308a4e1b/6:4/w_620%2Ch_413/235592.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
