import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-componente-pago',
  templateUrl: './componente-pago.component.html',
  styleUrls: ['./componente-pago.component.css']
})
export class ComponentePagoComponent implements OnInit {

  constructor(private router: Router, private common:CommonService) { }

  ngOnInit() {
    this.common.sendMessage('Datos del pago');
  }

  callFunction(){
    this.router.navigate(['respuesta']);
  }

}
