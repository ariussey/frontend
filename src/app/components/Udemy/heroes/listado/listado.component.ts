import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Aironman', 'Spiderman', 'Superman', 'Capitan America']
  heroeBorrado: string = '';
  boton: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
