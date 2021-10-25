import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {
  ing: FormControl = new FormControl;
  ingForm!: FormGroup;
  defaultIng = {
    ing1: 'apples',
    ing2: 'pies'
  };
  
  recipe: Recipe = new Recipe();
  submitted = false;

  constructor(private recipeService: RecipeService, 
    private router: Router, private fb: FormBuilder) {}

  createIng():FormGroup{
    return this.fb.group({
      ing: ['', Validators.required],
      ings:this.fb.array([this.createIng()],Validators.required)
    })
  }

  get ings():FormArray {
    return <FormArray> this.ingForm.get('recipes');
  }

  addIng() {
        this.ings.push(this.createIng())
  }

  ngOnInit() {
    /*
    this.ingForm = new FormGroup({
      ing: new FormControl(this.defaultIng,[Validators.required])})
    */
   }

  newRecipe(): void {
    this.submitted = false;
    this.recipe = new Recipe();
  }

  save() {
    this.recipeService.createRecipe(this.recipe)
      .subscribe(data => console.log(data), error => console.log(error));
    this.recipe = new Recipe();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/recipes']);
  }
}


