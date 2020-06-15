import { Book } from './../models/book.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  constructor(private http: HttpClient) { }

  public getBooks(): Observable <any>{
    return this.http.get(`http://localhost:3000/books`);
  }

}
