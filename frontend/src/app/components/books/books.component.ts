import { Component, OnInit } from '@angular/core';
import { BookApiService } from 'src/app/services/book-api.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: any;
  error: any;
  constructor(private bookAPIService: BookApiService) {
    this.getBookFromAPI();
   }

  ngOnInit(): void {
  }

  getBookFromAPI() {
    this.bookAPIService.getBooks().subscribe(
      (data: any) => {
        this.books = data;
      }, error => {
        this.error = error;
        console.error('Erro', error);
      });
  }
}
