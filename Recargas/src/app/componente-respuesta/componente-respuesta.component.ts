import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-componente-respuesta',
  templateUrl: './componente-respuesta.component.html',
  styleUrls: ['./componente-respuesta.component.css']
})
export class ComponenteRespuestaComponent implements OnInit {

  constructor(private common:CommonService) { }

  ngOnInit() {
    this.common.sendMessage('Mensaje de respuesta');
  }

}
