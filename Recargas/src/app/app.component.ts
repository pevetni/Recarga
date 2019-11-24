import { Component, OnInit } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private title:any;

  constructor(private common:CommonService){
      this.common.sendMessage('Pantalla Inicial');
  }

  ngOnInit(): void {
    this.common.getMessage().subscribe(val=>{
      this.title = val.msg; 

    })
  }
  
}
