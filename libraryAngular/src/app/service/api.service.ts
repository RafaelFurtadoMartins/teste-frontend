import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    constructor(public http: HttpClient, public BookService: BookService) { 

    }

    
  
}
