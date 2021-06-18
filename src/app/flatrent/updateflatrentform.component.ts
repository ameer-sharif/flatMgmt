import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { cflat } from '../model/flat.model';
import { crent } from '../model/flatrent.model';
import { FlatService } from '../service/flat.service';
import { FlatRentService } from '../service/flatrent.service';




@Component({
  selector: 'updateflatRentForm',
  template: `
  <div  class = "container" style="width:550px; background-color: pink"> 
  <div class="col-md-6">
 
  <form [formGroup]="updateForm" autocomplete="off" novalidate (ngSubmit)="updateFlat(updateForm.value)">

  <div class="form-group" >
          <label for="userId">User Id:</label>
              <input  id="userId" required type="text" class="form-control" formControlName="userId" readonly   [ngModel]=flats?.userId  />
              
    </div>
      
    <div class="form-group" >
            <label for="ownerName">Owner Name:</label>
                <input  id="ownerName" required type="text"   class="form-control" formControlName="ownerName" readonly  [ngModel]=flats?.ownerName  />
    </div>



  <div class="form-group" >
  <label for="flatNo">Flat No:</label>
  <em *ngIf="(updateForm.controls.flatNo?.invalid) && (updateForm.controls.flatNo?.touched)">Required</em>
      <input  id="flatNo" required type="text"   class="form-control" formControlName="flatNo"  [ngModel]=flats?.flatNo placeholder="Enter Flat No..." />
</div>

 
<div class="form-group" >
<label for="amount">Amount:</label>
<em *ngIf="updateForm.controls.amount?.invalid && (updateForm.controls.amount?.touched)">Required</em>
<input  id="amount"  required type="text" class="form-control" formControlName="amount" [ngModel]=flats?.amount placeholder="Enter Amount..." />
</div>



<div class="form-group" >
<label for="flatType">Flat Type:</label>
<em *ngIf="updateForm.controls.flatType?.invalid && (updateForm.controls.flatType?.touched)">Required</em>
<input  id="flatType"  required type="text" class="form-control" formControlName="flatType" [ngModel]=flats?.flatType placeholder="Enter Flat Type..." />
</div>


  <button type="submit"  [disabled]=updateForm.invalid class="btn btn-warning">Update</button>&nbsp;
  <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
  </form>
  </div>
  </div>

  `,
  styles: [`em{float:right; color: #E05c65; padding-left-10px;`]
},

)


export class UpdateFlatRentFormComponent implements OnInit {
 
  
  flats : crent; 
  updateForm : FormGroup;
  
  

  constructor(private router: Router, private flatrentService: FlatRentService, private activatedRoute: ActivatedRoute) {
    console.log("***********update flat Rent form**************");
  }


  ngOnInit(): void{

    this.updateForm = new FormGroup
    ({
          userId : new FormControl(),
          ownerName : new FormControl(),
          flatNo : new FormControl(),
          amount : new FormControl(),
          flatType : new FormControl()

    });

    this.flatrentService.getFlatRentById(+this.activatedRoute.snapshot.params['fid']).subscribe(flat => this.flats = flat);

    
    
  }



  updateFlat(newFlat: crent){
    console.log("********** update *********")
       this.flatrentService.updateFlatRent(newFlat).subscribe(flat => this.flats = flat);
       this.router.navigate(['/flatRent']);
  }

  cancel() {
    this.router.navigate(['/flatRent/update'])
  }
}

