import { HttpClient, HttpHeaders } from "@angular/common/http";
import { fn } from "@angular/compiler/src/output/output_ast";
import { Injectable } from "@angular/core";
import { observable, Observable } from "rxjs";
import { cflat } from "../model/flat.model";
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class FlatRentService {

  private base_url: string = "http://localhost:9997/flatRent";


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) {

  }

  public getAllflatRents(): Observable<cflat[]> {

    return this.httpClient.get<cflat[]>(this.base_url).pipe(
                                                            tap(flatdata=> console.log(flatdata)),
                                                           /*  map(flats => flats.filter(flat => flat.userId<5)),
                                                            tap(flatdata=> console.log(flatdata)),
                                                            map(flats => flats.filter(flat => flat.ownerName=="O4")), */



    );
  }

  public getFlatRentById(fid: number): Observable<cflat> {

    const getbyId = `${this.base_url}/id/${fid}`;
    return this.httpClient.get<cflat>(getbyId);
  }


  public getFlatRentByName(fname: string): Observable<cflat> {
    const getbyName = `${this.base_url}/name/${fname}`;
    return this.httpClient.get<cflat>(getbyName);
  }

  public addFlatRent(newFlat: cflat): Observable<cflat> {
    return this.httpClient.post<cflat>(this.base_url, newFlat, this.httpOptions);
  }

  public deleteflatRent(fid: number): Observable<cflat> {

    const deleteurl = `${this.base_url}/delete/${fid}`;
    return this.httpClient.delete<cflat>(deleteurl);
  }

  public updateFlatRent(newFlat: cflat): Observable<cflat> {

    console.log("*****" + JSON.stringify(newFlat));
    const updateurl = `${this.base_url}/update`;

    return this.httpClient.put<cflat>(updateurl, newFlat, this.httpOptions);
  }

  public getPageFlats(newpage: cflat): Observable<cflat> {

    const pageurl = `${this.base_url}/page`;

    return this.httpClient.get<cflat>(pageurl);
  }

  /* public getPageFlats(pageNo: number, pageSize: number, sortBy: string){

    return this.httpClient.get(this.url+'/page?pageNo='+pageNo+'&pageSize='+pageSize+'&sortBy='+sortBy);

    //http://localhost:9997/flats/page?pageNo=0&pageSize=10&sortBy=userId
  } */

}

