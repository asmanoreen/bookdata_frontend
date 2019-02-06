import { Pipe, PipeTransform ,OnInit } from '@angular/core';
import { BookserviceService } from '../service/bookservice.service';

@Pipe({
  name: 'bookfilter'
})
export class BookfilterPipe implements PipeTransform  {

  constructor( private bookSer: BookserviceService) {}
  

  searchObj: any = [];
  

  transform(elements: any, searchItem: any): any {
    console.log(elements);
    
    if(!searchItem)
            return elements;
    
    return elements.filter(function(ele){

      return ele.authorName.toLowerCase().includes(searchItem.toLowerCase())

    })  

  }
 

}
