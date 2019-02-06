import { Component, OnInit, ViewChild, HostListener, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MdbTablePaginationComponent, MdbTableService } from 'angular-bootstrap-md';
import { BookserviceService } from '../service/bookservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-allbook',
  templateUrl: './get-allbook.component.html',
  styleUrls: ['./get-allbook.component.css']
})
export class GetAllbookComponent implements OnInit {

  @ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;


  searchItem: string = "";
  searchData: any;

  elements: any = [];
  temp: any = [];
  pageLimit = 4;
  pageOffset = 0;
  currentLength: number;
  userListLenght: number;
  numberOfLikes =0;
  numberOfDisLikes =0;
  iconColorLike:string;
  iconColorDisLike:string;

  headElements = ['Book ID', 'Author Name', 'Book Title', 'Publish Date', 'Operations'];

  constructor(private tableService: MdbTableService, private cdRef: ChangeDetectorRef, private bookSer: BookserviceService, private router: Router) { }

  ngOnInit() {

    this.bookSer.getAllbook(this.pageLimit, this.pageOffset).subscribe((data) => {
      // console.log(data.bookObj["authorName"][0]);
      // console.log(data.bookObj.length);
      this.pageLimit = data.bookObj.length;
      this.elements = data.bookObj;
      this.currentLength = data.bookObj.length;
      console.log("current : ", this.currentLength);
      this.userListLenght = data.usersListCount;
      console.log(this.userListLenght);
      for(var i = 0; i < data.bookObj.length; i++) {
        this.temp= data.bookObj[i];
        console.log(this.temp);
    }
      
    })

  }
  addBook() {
    this.router.navigate(["/registerbook"])
  }

  likeBtnClick(bookId,bookLikes){
    
    console.log(bookLikes);
    
    this.numberOfLikes++;

    this.iconColorLike = bookLikes ? 'blue' : 'white' ;
    this.bookSer.addLikes(bookId,this.numberOfLikes).subscribe(data=>{
      this.router.navigate(['']);
      this.numberOfLikes=0;
   })

  }
  dislikeBtnClick(bookId){

      this.numberOfDisLikes++;
      this.bookSer.addDisLikes(bookId,this.numberOfDisLikes).subscribe(data=>{
        this.iconColorDisLike = data.success ? 'blue' : 'white' ;
        this.router.navigate(['']);
        this.numberOfDisLikes=0;
     })
  
    
  }

  deleteBook(bookId) {
    this.bookSer.deleteBook(bookId).subscribe(data => {
      if (data.success) {
        alert("Book Delete Successfully");
        this.router.navigate(['']);
      } else {
        alert("Something Wrong");
      }
    })
  }
  updateBookrecord(bookId) {
    this.router.navigate(['/bookupdate', bookId]);
  }
  viewBookrecord(bookId) {
    this.router.navigate(['/viewrecord', bookId]);
  }

  searchText(searchItem) {
    this.bookSer.searchBookData(searchItem).subscribe(data => {
      if (data.success) {
        this.searchData = data.bookObj;
      }
      console.log(data.bookObj);

    })
  }

  getPreviousRecord(pageLimit, pageOffset) {

    console.log("pageLimit :", pageLimit, "pageOffset :", pageOffset);

    this.pageOffset -= pageLimit;
    this.pageLimit = pageLimit;

    this.bookSer.getAllbook(this.pageLimit, this.pageOffset).subscribe((data) => {
      this.currentLength -= data.bookObj.length;
      console.log("current : ", this.currentLength);
      this.elements = data.bookObj;
    })

  }

  getNextRecord(pageLimit, pageOffset) {

    console.log("pageLimit :", pageLimit, "pageOffset :", pageOffset);

    this.pageOffset += pageLimit;
    this.pageLimit = pageLimit;


    console.log("pageLimit :", this.pageLimit, "pageOffset :", this.pageOffset);

    this.bookSer.getAllbook(this.pageLimit, this.pageOffset).subscribe((data) => {
      console.log(data.bookObj);
      this.currentLength += data.bookObj.length;
      console.log("current : ", this.currentLength);
      this.elements = data.bookObj;

    })
  }

  disablePreviousbtn() {
    if (this.pageOffset == 0)
      return false;
    else
      return true;
  }
  disableNextbtn() {
    if (this.currentLength == this.userListLenght)
      return false;
    else
      return true;
  }



}
