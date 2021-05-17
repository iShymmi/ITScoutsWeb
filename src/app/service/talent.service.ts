import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Talent } from '../common/Talent';

@Injectable({
  providedIn: 'root'
})
export class TalentService {

  private baseUrl = 'http://localhost:8080/talents'
  
  constructor(private httpClient: HttpClient) { }

  getTalentList(): Observable<Talent[]> {
    return this.httpClient.get<Talent[]>(this.baseUrl);
  }
}
