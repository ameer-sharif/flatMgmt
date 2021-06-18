import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponent, } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlatService } from './service/flat.service';
//import { FlatIdRouteGuardCheckService } from './service/flatrouteguard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatExpansionModule, MatPaginatorModule } from '@angular/material';
import { MatInputModule, MatTableModule, MatSortModule } from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';
import { FlatRentService } from './service/flatrent.service';



@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
   MatPaginatorModule,
   MatExpansionModule,
   MatInputModule, MatTableModule, MatSortModule,
    NgxPaginationModule
   

  
    
    
    
    
    

  ],
  providers: [FlatService, FlatRentService], //FlatIdRouteGuardCheckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
