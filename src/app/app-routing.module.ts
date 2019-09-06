import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLibrarianComponent } from './add-librarian/add-librarian.component';
import { LoginComponent } from './login/login.component';
import { UpdateLibrarianComponent } from './update-librarian/update-librarian.component';
import { DeleteLibrarianComponent } from './delete-librarian/delete-librarian.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { ShowAllBooksComponent } from './show-all-books/show-all-books.component';
import { GetIssuedBooklistComponent } from './get-issued-booklist/get-issued-booklist.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { RequestBookComponent } from './request-book/request-book.component';
import { ReceiveBookComponent } from './receive-book/receive-book.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'addLibrarian', component: AddLibrarianComponent},
  {path: 'updateLibrarian', component: UpdateLibrarianComponent},
  {path: 'deleteLibrarian', component: DeleteLibrarianComponent},
  {path: 'addBook', component: AddBookComponent},
  {path: 'updateBook', component: UpdateBookComponent},
  {path: 'deleteBook', component: DeleteBookComponent},
  {path: 'showAllBooks', component: ShowAllBooksComponent},
  {path: 'getIssuedBookList', component: GetIssuedBooklistComponent},
  {path: 'searchBook', component: SearchBookComponent},
  {path: 'requestBook', component: RequestBookComponent},
  {path: 'receiveBook', component: ReceiveBookComponent},
  {path: 'returnBook', component: ReturnBookComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
