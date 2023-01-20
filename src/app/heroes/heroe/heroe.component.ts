import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: "heroe.component.html"
})

export class HeroeComponent
{
//Atributos publicos de la clase    
public nombre: string = 'Ironman';
public edad: number = 45;

//Getters de la clase
get nombreCapitalizado()
{
    return this.nombre.toUpperCase();
}

//Métodos de la clase 
obtenerNombre(): string
{
    return `${this.nombre} - ${this.edad}`;
}

cambiarNombre():void
{
 this.nombre = "Spiderman";
}

cambiarEdad():void
{
 this.edad = 30;
}



}