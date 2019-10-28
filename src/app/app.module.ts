import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AddLibrarianComponent } from './add-librarian/add-librarian.component';
import { DeleteLibrarianComponent } from './delete-librarian/delete-librarian.component';
import { UpdateLibrarianComponent } from './update-librarian/update-librarian.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SearchBookComponent } from './search-book/search-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { ShowAllBooksComponent } from './show-all-books/show-all-books.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { GetIssuedBooklistComponent } from './get-issued-booklist/get-issued-booklist.component';
import { RequestBookComponent } from './request-book/request-book.component';
import { ReceiveBookComponent } from './receive-book/receive-book.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { GetAllLibrarianComponent } from './get-all-librarian/get-all-librarian.component';
import { ShowAllUsersComponent } from './show-all-users/show-all-users.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AddLibrarianComponent,
    DeleteLibrarianComponent,
    UpdateLibrarianComponent,
    HomeComponent,
    SearchBookComponent,
    AddBookComponent,
    DeleteBookComponent,
    ShowAllBooksComponent,
    IssueBookComponent,
    GetIssuedBooklistComponent,
    RequestBookComponent,
    ReceiveBookComponent,
    ReturnBookComponent,
    GetAllLibrarianComponent,
    ShowAllUsersComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
