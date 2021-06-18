/* import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { Observable } from "rxjs";
import { FlatService } from "./flat.service";
 
@Injectable()
export class FlatIdRouteGuardCheckService implements CanActivate {
  
  flatid :number;
  fname: string;

  constructor(private flatService : FlatService , private router : Router){
 
  }
  /* canActivate(activatesroute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    console.log("Route guard is called")
    //activate route when true returned other wise don't activate the url
    if(!this.flatService.getFlatById(+activatesroute.params['fid'])){
        this.router.navigate(['/flatnotfound'])
    }
        return true;
 
  } */

 /*  canActivate(route: ActivatedRouteSnapshot) {
    console.log(+route.params['fid'])
    this.flatService.getFlatById(+route.params['fid']).subscribe(flatExists => this.flatid = flatExists.userId);

    console.log(+route.params['fname'])
    this.flatService.getFlatByName(route.params['fname']).subscribe(flatExists => this.fname = flatExists.ownerName);

     if (!this.flatid || !this.fname)
       this.router.navigate(['/flatnotfound'])
    return true

    
  }
 */

 
//} 