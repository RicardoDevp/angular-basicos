import { Component } from '@angular/core';

@Component({
  //Porque es la aplicacion principal el selector toma app-root
  selector: 'app-root',
  //Es la ruta de la plntilla HTML del componente
  templateUrl: 'app.component.html'
 //Si ponemos template solo nos da la posibilidad de crear una página ahí mimso
  /// template: '<span>Template sin URL</span>',
 // style: 'app.component.html'
}
)
export class AppComponent {
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
