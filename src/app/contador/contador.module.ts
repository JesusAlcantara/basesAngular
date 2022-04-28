import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';

@NgModule ({
    declarations: [
        ContadorComponent,
    ],
    exports: [ // Cosas que se quieren hacer visibles fuera del módulo
        ContadorComponent
    ]
})
export class ContadorModule {}
