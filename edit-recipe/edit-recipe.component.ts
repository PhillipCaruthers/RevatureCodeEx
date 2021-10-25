import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  id!: number;
  recipe!: Recipe;

  constructor(private route: ActivatedRoute,private router: Router,
    private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipe = new Recipe();

    this.id = this.route.snapshot.params['id'];
    
    this.recipeService.getRecipe(this.id)
      .subscribe(data => {
        console.log(data)
        this.recipe = data;
      }, error => console.log(error));
  }

  updateRecipe() {
    this.recipeService.updateRecipe(this.id, this.recipe)
      .subscribe(data => console.log(data), error => console.log(error));
    this.recipe = new Recipe();
    this.gotoList();
  }

  onSubmit() {
    this.updateRecipe();    
  }

  gotoList() {
    this.router.navigate(['/recipes']);
  }

}