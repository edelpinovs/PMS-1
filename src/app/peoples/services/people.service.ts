import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from '../models/people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  apiAuthBaseUrl = 'http://interview.businessfacilitation.org/';

  constructor(public http: HttpClient) { }

  public getAll(): Observable<People[]> {
    const url = `${this.apiAuthBaseUrl}api/people`;
    return this.http.get<People[]>(url);
  }

  public update(people: People): Observable<People> {
    const url = `${this.apiAuthBaseUrl}api/people/${people.id}`;
    return this.http.put<People>(url, people);
  }

  public create(people: People): Observable<People> {
    const url = `${this.apiAuthBaseUrl}api/people`;
    return this.http.post<People>(url, people);
  }

  public delete(id: number): Observable<number> {
    const url = `${this.apiAuthBaseUrl}api/people/${id}`;
    return this.http.delete<number>(url);
  }
}
