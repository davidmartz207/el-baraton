import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
    transform(value, args: string[]): any {
        let keys = [];

        convertir(value, 0);

        //funciión que aplana la estructura de arbol para mostrarla mas facílmente

        function convertir(valores, padre, contador = 0) {
            contador++;
            for (let index = 0; index < valores.length; index++) {
                //si es hijo
                if (padre != 0) {
                    valores[index].style = 10 * contador + 'px';
                    valores[index].clase1 = 'hijo';
                    valores[index].clase3 = 'hijode' + padre;
                }
                //agrgamos al array el valor
                keys.push(valores[index]);
                //si el elemento tiene subvalores es un padre
                if (valores[index].sublevels) {
                    valores[index].style = 10 * contador + 'px';
                    valores[index].clase2 = 'padre';
                    convertir(valores[index].sublevels, valores[index].id, contador);
                }
            }

        }

        return keys;
    }
}