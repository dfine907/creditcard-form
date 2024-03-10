import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    //required and minLength are SYNCHRONOUS
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  constructor() {
    console.log(this.cardForm.get('name'));
    
  }

  ngOnInit() {
    console.log('Component initialized');
  }
}
