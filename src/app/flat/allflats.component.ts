import { Component,Input,Output, EventEmitter} from '@angular/core';
import { cflat } from '../model/flat.model';


@Component({
  selector: 'allflats',
  template:`<div class="container">   
                                
  <div class="well hoverwell thumbnail py-3 my-3" [routerLink]="['/flats/id',flatdata.userId]">
  
    <div > USER ID : {{flatdata?.userId}} </div>
      <div> OWNER NAME : {{flatdata?.ownerName | titlecase}} </div>
      <div>FLAT NO : {{flatdata?.flatNo | titlecase}} </div>
      <div>FLOOR NO : {{flatdata?.floorNo | titlecase}} </div>
      <div> FLAT TYPE : {{flatdata?.flatType | titlecase}} </div>
      <div>
          <!-- <span> <input type="text" value="Hello" (keypress) = "myFunction()"></span><br/>-->
          <span> <button [class]=buttonStyle (click)="onButtonClick()"  [routerLink]="['/flats/id',flatdata.userId]"> View </button></span>
      </div>
  </div>
</div>`,
})
export class AllFlatsComponent {
  @Input() flatdata: cflat[];  // property receiving the data from parent using property binding
  // We can create custom event 
   @Output() customEvent =  new EventEmitter(); //   (customEvent) = "someFunction"
 
   isDisabled = true ;  
   buttonStyle = "btn btn-primary";
    
   myFunction(){
     this.isDisabled = false
     this.buttonStyle = "btn btn-success";
   }
 
   onButtonClick(){
     this.customEvent.emit(this.flatdata);  // what ever is send  by default get stored into one javascript '$event'
   }

  

  

}
