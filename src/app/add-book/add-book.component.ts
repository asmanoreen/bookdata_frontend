import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../service/bookservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent  {

  coverImg:File =null;
  constructor(private bookSer:BookserviceService ,private router:Router) { }

  onFileSelected(event){
    this.coverImg=event.target.files[0];
    
  }
  addBook(value) {

    var authorName = value.authorName;
    var bookName = value.bookName;
    var publishDate = value.publishDate;
  
    this.bookSer.registerBook(authorName,bookName,publishDate,this.coverImg).subscribe(data=>{
      if(data.success){
        alert("Book Register Successfully");
        this.router.navigate(['/']);
      }else{
        alert("Something Wrong");
      }
    })
  
  }
}
