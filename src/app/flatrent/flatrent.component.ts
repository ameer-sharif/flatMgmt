import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { crent } from '../model/flatrent.model';
import { FlatRentService } from '../service/flatrent.service';

@Component({
  selector: 'flatrent',
  template: `<div class="container" >
                <h1>Flat Details</h1>
                <hr/>
                <div  class= "row row-cols-2">
                <div  *ngFor="let flatrent of flatrent" class="col-md-4 ">  
                        <allflatrents  [flatrentdata] = flatrent  (customEvent)="parentFunction($event)" ></allflatrents>    
                      

                </div>
              </div>`

})
export class FlatRentComponent implements OnInit {

  parentFunction(event) {
    console.log(event);
  }

  
  private flatrent: crent[];

  constructor(private flatrentService : FlatRentService){
   
  
}

ngOnInit(){
  console.log("***********all flats**************");
  
  this.flatrentService.getAllflatRents().subscribe(flat => this.flatrent = flat)

}



  
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}

