import { HttpClient, HttpHeaders } from "@angular/common/http";
import { fn } from "@angular/compiler/src/output/output_ast";
import { Injectable } from "@angular/core";
import { observable, Observable } from "rxjs";
import { cflat } from "../model/flat.model";
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class FlatService {

  private base_url: string = "http://localhost:9997/flats";


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) {

  }

  public getAllflats(): Observable<cflat[]> {

    return this.httpClient.get<cflat[]>(this.base_url).pipe(
                                                            tap(flatdata=> console.log(flatdata)),
                                                           /*  map(flats => flats.filter(flat => flat.userId<5)),
                                                            tap(flatdata=> console.log(flatdata)),
                                                            map(flats => flats.filter(flat => flat.ownerName=="O4")), */



    );
  }

  public getFlatById(fid: number): Observable<cflat> {

    const getbyId = `${this.base_url}/id/${fid}`;
    return this.httpClient.get<cflat>(getbyId);
  }


  public getFlatByName(fname: string): Observable<cflat> {
    const getbyName = `${this.base_url}/name/${fname}`;
    return this.httpClient.get<cflat>(getbyName);
  }

  public addFlat(newFlat: cflat): Observable<cflat> {
    return this.httpClient.post<cflat>(this.base_url, newFlat, this.httpOptions);
  }

  public Deleteflat(fid: number): Observable<cflat> {

    const deleteurl = `${this.base_url}/delete/${fid}`;
    return this.httpClient.delete<cflat>(deleteurl);
  }

  public updateFlat(newFlat: cflat): Observable<cflat> {

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

/* const flats : cflat[] =[
    {
      userId: 1,
      ownerName: "O1",
      flatNo: "F1",
      floorNo: "1",
      flatType: "A1"
    },
    {
      userId: 2,
      ownerName: "O2",
      flatNo: "F2",
      floorNo: "2",
      flatType: "A2"
    },
    {
      userId: 3,
      ownerName: "O3",
      flatNo: "F3",
      floorNo: "3",
      flatType: "A3"
    },
    {
      userId: 4,
      ownerName: "O4",
      flatNo: "F4",
      floorNo: "4",
      flatType: "A4"
    },
    {
      userId: 5,
      ownerName: "O5",
      flatNo: "F5",
      floorNo: "5",
      flatType: "A5"
    },
    {
      userId: 6,
      ownerName: "O6",
      flatNo: "F6",
      floorNo: "6",
      flatType: "A6"
    }


  ] */