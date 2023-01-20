//Cómo crear un módulo:
//Se importa el nodeModule del angularCore
//Luego se declara la clase (En Angular todo es una clase)
//Luego se usa el decorador 
//Los módulos tienen piezas importantes que son las declaraciones
//Las declaraciones son basicamente los componentes dentro del módulo 
//Luego se define los export que quiero que sea visible fuera del módulo, ya que lo que definamos en las declaraciones es invisible fuera del módulo
//Luego se definen los imports usualmente dentro de los imports se colocan solo módulos 

import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
//import { CommonModule } from "@angular/common";

@NgModule({
    declarations:
        [
            HeroeComponent,
            ListadoComponent
        ],
    exports:
        [
            ListadoComponent,
            HeroeComponent
        ],
    imports:
        [
            //En el tutorial este import habilita direrctivas como el *ngIf y *ngFor
            //A mi me funcionan las directivas sin el import, supongo que sea un cambio de Angular para la versión que tengo que es más reciente
            // CommonModule,
        ]
})

export class HeroesModule { }
