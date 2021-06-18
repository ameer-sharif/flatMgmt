import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl, FormGroup } from '@angular/forms';
import { crent } from '../model/flatrent.model';
import { FlatRentService } from '../service/flatrent.service';

@Component({
  selector: 'createflatrent',
  template: `
  <div  class = "container" style="width:550px; background-color: green"> 
        <div style="text-align:center;">
          <h3><b>New Flat Registration</b></h3>
        </div>
    
    <form [formGroup]="createForm" autocomplete="on" novalidate (ngSubmit)="addFlat(createForm.value)">
        

        <div class="form-group" >
          <label for="userId">User Id:</label>
          <em *ngIf="(createForm.controls.userId?.invalid) && (createForm.controls.userId?.touched)">Required</em>
              <input  id="userId" required type="text" class="form-control" formControlName="userId"  (ngModel)=rent?.userId placeholder="Enter User Id..." />
        </div>
      
        <div class="form-group" >
          <label for="ownerName">Owner Name:</label>
          <em *ngIf="(createForm.controls.ownerName?.invalid) && (createForm.controls.ownerName?.touched)">Required</em>
              <input  id="ownerName" required type="text"   class="form-control" formControlName="ownerName"  (ngModel)=rent.ownerName placeholder="Enter Owner Name..." />
        </div>

        <div class="form-group" >
          <label for="flatNo">Flat No:</label>
          <em *ngIf="(createForm.controls.flatNo?.invalid) && (createForm.controls.flatNo?.touched)">Required</em>
              <input  id="flatNo" required type="text"   class="form-control" formControlName="flatNo"  (ngModel)=rent.flatNo placeholder="Enter Flat No..." />
        </div>

        <div class="form-group" >
          <label for="amount">Amount:</label>
        <em *ngIf="createForm.controls.amount?.invalid && (createForm.controls.amount?.touched)">Required</em>
        <input  id="amount"  required type="text" class="form-control" formControlName="amount" (ngModel)=rent.amount placeholder="Enter Amount..." />
      </div>

        

        <div class="form-group" >
          <label for="flatType">Flat Type:</label>
          <em *ngIf="createForm.controls.flatType?.invalid && (createForm.controls.flatType?.touched)">Required</em>
          <input  id="flatType"  required type="text" class="form-control" formControlName="flatType" (ngModel)=rent.flatType placeholder="Enter Flat Type..." />
        </div>

        
        <button type="submit"  [disabled]=createForm.invalid class="btn btn-primary">Save</button>
        <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
    </form>
  <div>`,
  styles: ['em{float:right; color: #E05c65; padding-left-10px;}']
}
)
export class CreateFlatRentComponent implements  OnInit{

  
  private rent: crent;
  createForm: FormGroup;
  
  constructor(private router: Router, private flatrentService: FlatRentService) {
   
  }

  ngOnInit(){

    this.createForm = new FormGroup
    ({
          userId : new FormControl(),
          ownerName : new FormControl(),
          flatNo : new FormControl(),
          Amount : new FormControl(),
          flatType : new FormControl()

    });

    
    
  }


  addFlat(newFlat: crent) {
    this.flatrentService.addFlatRent(newFlat).subscribe(flat => this.rent = flat);
    this.router.navigate(['/flats'])
    console.log(newFlat)
  }

 

  cancel() {
    this.router.navigate(['/flatRent'])
  }






}
