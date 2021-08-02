import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'home'
    }
  },
  {
    path: 'book',
  component: BookComponent,
  data: {
    title: 'Book'
  }
  },
  {
    path: 'book-create',
    component: BookCreateComponent,
    data: {
      title: 'Book-Create'
    }
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
