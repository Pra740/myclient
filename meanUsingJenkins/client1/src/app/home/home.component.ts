import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   emps=[]
  constructor(public service :DataService)
   { 

   }

  ngOnInit() {
    this.service.Select().subscribe(response=>{
      if(response['status']==='success')
      {
        this.emps=response['data'] as any[];
      }
      else
      {
        console.log("error : "+response['error'])
      }

    })

    
  }

}
