import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre: string = 'Aironman';
    edad: number = 30;

    obtenerNombre(): string{
        return `${ this.nombre } - ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre = 'Juan';
    }

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    cambiarEdad(): void {
        this.edad = 50;
    }
}