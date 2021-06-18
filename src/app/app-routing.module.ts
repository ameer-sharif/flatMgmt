import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './error/error.component';
import { AllFlatsComponent } from './flat/allflats.component';
import { CreateFlatComponent } from './flat/createflat.component';
import { DeleteFlatComponent } from './flat/deleteflat.component';
import { FlatComponent } from './flat/flat.component';
import { FlatByIdComponent } from './flat/flatbyid.component';
import { FlatByNameComponent } from './flat/flatbyname.component';
import { UpdateFlatComponent } from './flat/updateflat.component';
import { UpdateFlatFormComponent } from './flat/updateflatform.component';
import { ViewByNameComponent } from './flat/viewbyname.component';
import { AllFlatRentComponent } from './flatrent/allflatrents.component';
import { CreateFlatRentComponent } from './flatrent/createflatrent.component';
import { DeleteFlatRentComponent } from './flatrent/deleteflatrent.component';
import { FlatRentByIdComponent } from './flatrent/flatrentbyid.component';
import { FlatRentByNameComponent } from './flatrent/flatrentbyname.component';
import { FlatRentComponent } from './flatrent/flatrent.component';
import { UpdateFlatRentComponent } from './flatrent/updateflatrent.component';
import { UpdateFlatRentFormComponent } from './flatrent/updateflatrentform.component';
import { ViewRentByNameComponent } from './flatrent/viewrentbyname.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageComponent } from './page/page.component';

//import { FlatIdRouteGuardCheckService } from './service/flatrouteguard.service';

const routes: Routes = [
                         /*  {path:"flats",component:FlatComponent},
                          
                          {path:"login",component:LoginComponent},

                          {path:"flats/new",component:CreateFlatComponent},

                          {path:"flats/page",component:PageComponent}, 

                          {path:"flats/id/:fid",component:FlatByIdComponent},
                          
                          {path:"flats/name",component:FlatByNameComponent},
                          {path:"flats/name/:fname",component:ViewByNameComponent},

                          {path:"flats/delete",component:DeleteFlatComponent},
                          {path:"flats/delete/:fid",component:DeleteFlatComponent},
                                                  
                          {path:"flats/update",component:UpdateFlatComponent},
                          {path:"flats/update/:fid",component:UpdateFlatFormComponent},
                          
                          {path:'',component:HomeComponent},
       
                          {path:'flats/flatnotfound', component:Error404Component},
                         
                          {path:'**', component:Error404Component}, */

                          {path:"flatRent",component:FlatRentComponent},
                          
                          {path:"login",component:LoginComponent},

                          {path:"flatRent/new",component:CreateFlatRentComponent},

                          {path:"flatRent/page",component:PageComponent}, 

                          {path:"flatRent/id/:fid",component:FlatRentByIdComponent},
                          
                          {path:"flatRent/name",component:FlatRentByNameComponent},
                          {path:"flatRent/name/:fname",component:ViewRentByNameComponent},

                          {path:"flatRent/delete",component:DeleteFlatRentComponent},
                          {path:"flatRent/delete/:fid",component:DeleteFlatRentComponent},
                                                  
                          {path:"flatRent/update",component:UpdateFlatRentComponent},
                          {path:"flatRent/update/:fid",component:UpdateFlatRentFormComponent},
                          
                          {path:'',component:HomeComponent},
       
                          {path:'flatRent/flatnotfound', component:Error404Component},
                         
                          {path:'**', component:Error404Component},






                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [
  /* FlatComponent,
    AllFlatsComponent,
    FlatByIdComponent,
    CreateFlatComponent,
    DeleteFlatComponent,
    UpdateFlatComponent,
    UpdateFlatFormComponent,
    FlatByNameComponent,
    ViewByNameComponent, */


    PageComponent,
    NavbarComponent,
    HomeComponent,
    Error404Component,
    LoginComponent,



    FlatRentComponent,
    AllFlatRentComponent,
    FlatRentByIdComponent,
    FlatRentByNameComponent,
    ViewRentByNameComponent,
    CreateFlatRentComponent,
    DeleteFlatRentComponent,
    UpdateFlatRentComponent,
    UpdateFlatRentFormComponent
    





]





                          //{path:"flats/page",component:PaginatorConfigurableExample},
                          //{path:"flats/page?pageNo=:pageNo&pageSize=:pageSize&sortBy=:sortBy",component:PaginationComponent},
        //http://localhost:9997/flats/page?pageNo=0&pageSize=10&sortBy=userId