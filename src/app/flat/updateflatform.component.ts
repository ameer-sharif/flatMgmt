import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { cflat } from '../model/flat.model';
import { FlatService } from '../service/flat.service';




@Component({
  selector: 'updateflat',
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
<label for="floorNo">Floor No:</label>
<em *ngIf="updateForm.controls.floorNo?.invalid && (updateForm.controls.floorNo?.touched)">Required</em>
<input  id="floorNo"  required type="text" class="form-control" formControlName="floorNo" [ngModel]=flats?.floorNo placeholder="Enter Floor No..." />
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


export class UpdateFlatFormComponent implements OnInit {
 
  
  flats : cflat ; 
  updateForm : FormGroup;
  
  

  constructor(private router: Router, private flatService: FlatService, private activatedRoute: ActivatedRoute) {
    console.log("***********update flat form**************");
  }


  ngOnInit(): void{

    this.updateForm = new FormGroup
    ({
          userId : new FormControl(),
          ownerName : new FormControl(),
          flatNo : new FormControl(),
          floorNo : new FormControl(),
          flatType : new FormControl()

    });

    this.flatService.getFlatById(+this.activatedRoute.snapshot.params['fid']).subscribe(flat => this.flats = flat);

    
    
  }



  updateFlat(newFlat: cflat){
    console.log("********** update *********")
       this.flatService.updateFlat(newFlat).subscribe(flat => this.flats = flat);
       this.router.navigate(['/flats']);
  }

  cancel() {
    this.router.navigate(['/flats/update'])
  }
}

