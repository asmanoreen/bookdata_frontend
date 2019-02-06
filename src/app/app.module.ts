import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { GetAllbookComponent } from './get-allbook/get-allbook.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { SimpleModalComponent } from './customModals/searchmodal.component';
import { HomeComponent } from './home/home.component';
import { BookserviceService } from './service/bookservice.service'
import { JQUERY_PROVIDER } from './service/jquery.service';
import { BookfilterPipe } from './customfitters/bookfilter.pipe';
import { ModaltriggerDirective } from './customDirective/modaltrigger.directive';
import { from } from 'rxjs';

const appRoutes: Routes = [
  { path: '', component: GetAllbookComponent },
  // { path: 'home', component: HomeComponent },
  { path: 'registerbook', component: AddBookComponent },
  // { path: 'getallbook', component: GetAllbookComponent },
  { path: 'bookupdate/:id', component: UpdateBookComponent },
  { path: 'viewrecord/:id', component: ViewbookComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    UpdateBookComponent,
    GetAllbookComponent,
    HomeComponent,
    ViewbookComponent,
    BookfilterPipe,
    SimpleModalComponent,
    ModaltriggerDirective
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [BookserviceService, JQUERY_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
