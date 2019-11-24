import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-componente-recargas',
  templateUrl: './componente-recargas.component.html',
  styleUrls: ['./componente-recargas.component.css']
})
export class ComponenteRecargasComponent implements OnInit {

  constructor(private common:CommonService) { }

  ngOnInit() {
    this.common.sendMessage('Recargas');
  }

}
