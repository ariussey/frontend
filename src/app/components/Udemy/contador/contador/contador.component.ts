import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-condador',
    template: `
        <div class="text-center">
            <h1>Contador</h1><hr>
            <a (click)="acumulador(-base)" class="btn btn-sm btn-danger">-1</a>
            <span class="mx-4"> {{numero}} </span>
            <a (click)="acumulador(base)" class="btn btn-sm btn-danger">+1</a>
        </div>
    `
})

export class ContadorComponent implements OnInit{
    numero: number = 10;
    base: number = 5;
    constructor(){

    }

    acumulador(base: number): void{
        this.numero += base;
    }

    ngOnInit(): void{}
}