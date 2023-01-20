
//Para crear un componente manualmente primero: 
//primero se crea el archivo nombrado nombre de archivo . component.ts
//Luego se importa el componente de los modulos de node Angular, Angular Core
//Luego se definen las propiedades del componnete, poniendo el @Componente({selector...})
//Luego se importa en las declaraciones modulos app.module.ts
//@NgModule({
//    declarations: [
//    AppComponent, 
//    ContadorComponent
//    ],
//Luego está listo para usar mediante la etiqueta en el componente app.component.html
//<app-contador></app-contador>

import {Component} from '@angular/core';

@Component({
//El selector en Angular 
selector: 'app-contador',
template: `
<!-- Así se accede a una propiedad de la clase para ponerla en el HTML o una expresión de JavaScript-->
<h1>{{titulo}}</h1>
<span>La base es: {{base}}</span>
<div></div>
<button (click)="incrementarODecrementar('+')">+{{base}}</button>
<span>{{numero}}</span>
<button (click)="incrementarODecrementar('-')">-{{base}}</button>
`
,

})

export class ContadorComponent
{
    titulo: string  = 'Contador App';
    numero: number = 0;
   
   base: number = 7;
   
   //Si se le pasa por parámetro "+" entonces incrementa en 1 el contador
   //Si se le pasa por parámetro "-" entonces decrementa en 1 el contador
   incrementarODecrementar(sentido:string):void
   {
   if(sentido == "+")
   {
     this.numero+= this.base;
   }
   if(sentido == "-")
   {
     this.numero-= this.base;
   }
   }
   
}