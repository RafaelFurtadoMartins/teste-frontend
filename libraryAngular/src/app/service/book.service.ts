import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public apiUrl = 'http://localhost:8080/swagger-ui.html#/';

  constructor() { }
}
