import { Injectable } from '@angular/core';
;
import { Observable } from 'rxjs';
import { Person } from '../models/person';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UBTeCHService {
  
  url:string = 'http://localhost:51730/api/UBTech/';

  constructor(private http: HttpClient) { }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url);
  }

}
 