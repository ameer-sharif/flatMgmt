import { Component, OnInit,EventEmitter, Output} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {cflat} from '../model/flat.model';
import { crent } from '../model/flatrent.model';
import { FlatService } from '../service/flat.service';
import { FlatRentService } from '../service/flatrent.service';

@Component({
  selector: 'flatRentbyname',
  template:`
  <div class="container" >
  <h1> Flat Details By Name</h1>
  <hr/>
  <div  class= "row row-cols-2">
    <div  *ngFor="let flatrent of flatrent" class="col-md-4 "> 
 
                         
        <div class="well hoverwell thumbnail py-3 my-3" >
        
          <div > USER ID : {{flatrent?.userId}} </div>
            <div> OWNER NAME : {{flatrent?.ownerName | titlecase}} </div>
            <div>FLAT NO : {{flatrent?.flatNo | titlecase}} </div>
            <div>AMOUNT : {{flatrent?.amount | titlecase}} </div>
            <div> FLAT TYPE : {{flatrent?.flatType | titlecase}} </div>
            <div>
            <button class="btn btn-danger " type="submit" (click)="onButtonClick()" [routerLink]="['/flatRent/name',flatrent.ownerName]"> VIEW
            </button>
            </div>
          </div>
        </div>
      

    </div>
  </div>
    
    
 `,
})
export class FlatRentByNameComponent implements OnInit{
  
    private flatrent: crent[];
    private name : crent;
    @Output() customEvent =  new EventEmitter();
  
  
    constructor(private flatrentService : FlatRentService, private activatedRoute: ActivatedRoute, private router: Router){
              

    }

    ngOnInit(){

      console.log("***all flats***");
      this.flatrentService.getAllflatRents().subscribe(flat => this.flatrent = flat);

     
    }

    onButtonClick(){
      this.customEvent.emit(this.flatrent);  // what ever is send  by default get stored into one javascript '$event'
    }
  
    /* viewflat(){
        console.log("************ view*********");
      this.flatService.getFlatByName(this.activatedRoute.snapshot.params['fname']).subscribe(f => this.name = f);
        //this.router.navigate(['/flats']);
      } */

  

  
  
}

    

  


