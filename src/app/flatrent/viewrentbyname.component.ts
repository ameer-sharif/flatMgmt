import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { crent } from '../model/flatrent.model';
import { FlatRentService } from '../service/flatrent.service';

@Component({
  selector: 'viewrentbyname',
  template:`<div class="container">
  <div  class= "row row-cols-3">
  
  <div class="well hoverwell thumbnail py-3 my-3">
      
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
export class ViewRentByNameComponent  {
    
    private flatrentdata: crent;

  
  
    constructor(private flatrentService : FlatRentService, private activatedRoute: ActivatedRoute, private router: Router){
        
      //this.flatdata =this.flatService.getFlatById(+activatedRoute.snapshot.params['fid']); //capture from URL and pass it to service
      console.log("************ view*********");
      this.flatrentService.getFlatRentByName(activatedRoute.snapshot.params['fname']).subscribe(f => this.flatrentdata = f);

      
    }

    
     
      
    

    

  

}
