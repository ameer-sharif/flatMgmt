import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {cflat} from '../model/flat.model';
import { FlatService } from '../service/flat.service';

@Component({
  selector: 'viewbyname',
  template:`<div class="container">
  <div  class= "row row-cols-3">
  
  <div class="well hoverwell thumbnail py-3 my-3">
      
      <div> OWNER NAME : {{flatdata?.ownerName | titlecase}} </div>
      <div>FLAT NO : {{flatdata?.flatNo | titlecase}} </div>
      <div>FLOOR NO : {{flatdata?.floorNo | titlecase}} </div>
      <div> FLAT TYPE : {{flatdata?.flatType | titlecase}} </div>
      <div>
          

      </div>
  </div>
  </div>
</div>`,
})
export class ViewByNameComponent  {
    
    private flatdata: cflat;

  
  
    constructor(private flatService : FlatService, private activatedRoute: ActivatedRoute, private router: Router){
        
      //this.flatdata =this.flatService.getFlatById(+activatedRoute.snapshot.params['fid']); //capture from URL and pass it to service
      console.log("************ view*********");
      this.flatService.getFlatByName(activatedRoute.snapshot.params['fname']).subscribe(f => this.flatdata = f);

      
    }

    
     
      
    

    

  

}
