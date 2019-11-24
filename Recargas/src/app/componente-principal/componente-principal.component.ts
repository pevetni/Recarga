import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-componente-principal',
  templateUrl: './componente-principal.component.html',
  styleUrls: ['./componente-principal.component.css']
})
export class ComponentePrincipalComponent implements OnInit {

  constructor(private common:CommonService) { }

  ngOnInit() {
    this.common.sendMessage('Pantalla Inicial');
  }

}
