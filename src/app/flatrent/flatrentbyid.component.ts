import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { crent } from '../model/flatrent.model';
import { FlatRentService } from '../service/flatrent.service';

@Component({
  selector: 'flatrentbyid',
  template:`
  <div *ngIf="errorMessage" class="alert alert-danger">
  {{errorMessage?.error?.details | json}}
  </div>
  
  
  <div class="container">
  <div  class= "row row-cols-3">
  
  <div class="well hoverwell thumbnail py-3 my-3">
      <div > USER ID : {{flatrentdata?.userId}} </div>
      <div> OWNER NAME : {{flatrentdata?.ownerName | titlecase}} </div>
      <div>FLAT NO : {{flatrentdata?.flatNo | titlecase}} </div>
      <div>AMOUNT : {{flatrentdata?.amount | titlecase}} </div>
      <div> FLAT TYPE : {{flatrentdata?.flatType | titlecase}} </div>
      <div>
          

      </div>
  </div>
  </div>
</div>`,
})
export class FlatRentByIdComponent implements OnInit {
    
    private flatrentdata: crent;
    private errorMessage;

  
  
    constructor(private flatrentService : FlatRentService, private activatedRoute: ActivatedRoute, private router: Router){
        
      //this.flatdata =this.flatService.getFlatById(+activatedRoute.snapshot.params['fid']); //capture from URL and pass it to service

      
    }

    ngOnInit(){
      this.flatrentService.getFlatRentById(+this.activatedRoute.snapshot.params['fid']).subscribe(
                                                                                (flat) => {this.flatrentdata = flat},
                                                                                (error) => {this.errorMessage = error},


      );



      
    }
   

    

  

}
