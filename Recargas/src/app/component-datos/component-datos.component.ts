import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-component-datos',
  templateUrl: './component-datos.component.html',
  styleUrls: ['./component-datos.component.css']
})

export class ComponentDatosComponent implements OnInit, OnDestroy {

  urlImagen: String;
  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.sub = this.route.params.subscribe(params => {
      this.urlImagen = params['tipo'];
   });
   }

  ngOnInit() {
  }

  callFunction(){
    this.router.navigate(['pago']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
