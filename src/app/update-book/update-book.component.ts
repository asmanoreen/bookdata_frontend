import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../service/bookservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  id: number;
  coverImgUpdate:File =null;
  bookRecord: any =[];
  constructor(private bookSer:BookserviceService ,private router:Router , private route:ActivatedRoute) { }

  ngOnInit() {
   this.route.params.subscribe(params => {
      console.log(params);
      this.id = +params['id']; 
      console.log(this.id);
      this.bookSer.getRecordbyid(this.id).subscribe(data=>{
        console.log(data);
        this.bookRecord=data.bookObj;
        console.log(this.bookRecord[0]["authorName"]);
        
      })
   });
  }

  onFileSelected(event){
    this.coverImgUpdate=event.target.files[0];
  }

  updateBookform(value: any) {
    console.log(value);
    var authorName = value.authorName;
    var bookName = value.bookName;
    var publishDate = value.publishDate;
    this.bookSer.updateBook(authorName,bookName,publishDate,this.id,this.coverImgUpdate).subscribe(data=>{
      if(data.success){
        alert("Book Update Successfully");
        this.router.navigate(['']);
      }else{
        alert("Something Wrong");
      }
    })
  } 

}
