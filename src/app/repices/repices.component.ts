import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe";

@Component({
  selector: 'rb-repices',
  templateUrl: './repices.component.html'
})
export class RepicesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
