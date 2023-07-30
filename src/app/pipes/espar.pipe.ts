import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'espar'
})

export class EsParPipe implements PipeTransform {
    transform(value: any) {
        var espar = (value % 2 == 0) ? 'es un numero par':'no es un numero par'; 
        return "El año es: " + value + " y " + espar;
    }
}