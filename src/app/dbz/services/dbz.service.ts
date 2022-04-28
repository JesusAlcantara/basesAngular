import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

      private _personajes: Personaje[] = [ // Poner _ es como poner private pero se ponen ambos
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 8500
        }
      ];

      get personajes(): Personaje[] {
          return [...this._personajes];
      }

      constructor() {}

      agregarPersonaje( personaje:Personaje ) {
          console.log(personaje);
          this._personajes.push(personaje);
      }
}
