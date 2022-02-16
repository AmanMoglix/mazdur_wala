import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-plp',
  templateUrl: './plp.component.html',
  styleUrls: ['./plp.component.css']
})
export class PlpComponent implements OnInit {
//brand by category
toppings: FormGroup;
  constructor(fb: FormBuilder) { this.toppings = fb.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });}

  ngOnInit(): void {
    
  }
// category 
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  // price range
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  

}
