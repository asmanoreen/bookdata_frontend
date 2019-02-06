import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../service/bookservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  id: number;
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
         console.log(this.bookRecord);
         
       })
    });
   }

}
 