import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule ({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ // Cosas que se quieren hacer visibles fuera del módulo
        ListadoComponent
    ],
    imports: [ // Aqui van módulos
        CommonModule // Módulo que sirve para
    ]
})
export class HeroesModule {}
