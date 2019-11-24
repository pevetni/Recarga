import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-pago',
  templateUrl: './componente-pago.component.html',
  styleUrls: ['./componente-pago.component.css']
})
export class ComponentePagoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  callFunction(){
    this.router.navigate(['respuesta']);
  }

}
