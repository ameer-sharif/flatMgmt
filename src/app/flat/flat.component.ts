import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import {cflat} from '../model/flat.model';
import { FlatService } from '../service/flat.service';

@Component({
  selector: 'flat',
  template: `<div class="container" >
                <h1>Flat Details</h1>
                <hr/>
                <div  class= "row row-cols-2">
                <div  *ngFor="let flats of flats" class="col-md-4 ">  
                        <allflats  [flatdata] = flats  (customEvent)="parentFunction($event)" ></allflats>    
                      

                </div>
              </div>`

})
export class FlatComponent implements OnInit {

  parentFunction(event) {
    console.log(event);
  }

  
  private flats: cflat[];

  constructor(private flatService : FlatService){
   
  
}

ngOnInit(){
  console.log("***********all flats**************");
  
  this.flatService.getAllflats().subscribe(flatdata => this.flats = flatdata)

}



  
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}

