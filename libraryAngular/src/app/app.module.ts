import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ModelComponent } from './model/model/model.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookCreateComponent,
    HomeComponent,
    ModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatCardModule,
 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
