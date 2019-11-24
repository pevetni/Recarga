import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-component-datos',
  templateUrl: './component-datos.component.html',
  styleUrls: ['./component-datos.component.css']
})

export class ComponentDatosComponent implements OnInit, OnDestroy {

  urlImagen: String;
  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router, private common: CommonService) {
    this.sub = this.route.params.subscribe(params => {
      this.urlImagen = params['tipo'];
   });
   }

  ngOnInit() {
    this.common.sendMessage('Datos de la recarga');
  }

  callFunction(){
    this.router.navigate(['pago']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
