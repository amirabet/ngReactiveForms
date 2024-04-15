import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

    // Versión con un hipotético Observable
    // Abstract Control = FormControl o FormArray
    // Retorna Promise o Observable con ValidationErrors {} o nul si es correcto
    validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        
        const email = control.value;

        /*
        * Creamos un Observable con su construcotr de Clase
        * Dentro tiene el callback con subscriber
        * subscriber es la función suscrita a los cambios del observable
        */
        const httpCallObservable = new Observable<ValidationErrors | null> ( (subscriber) => {

            /* email random para simular respuesta del backend
            * Con subscriber.next => hacemos que el Observable emita un nuevo valor
            * en este caso con el ValidationErrors rellenado
            * Con subscriber.complete(); cerramos y limpiamos la subscripción => además no hace falta usar el return;
            */
            if( email === 'a@a.as') {
                subscriber.next({ emailTaken: true });
                subscriber.complete();
            }

            subscriber.next (null);
            subscriber.complete();

        }).pipe(
            delay( 2000 ) //Forzamos retraso para simular async
        );

        return httpCallObservable;
        
    }

    // Opcional, para lanzar envento de cambio
    registerOnValidatorChange?(fn: () => void): void {
        throw new Error('Method not implemented.');
    }
    
    // Versión con un hipotético Observable
    // // Abstract Control = FormControl o FormArray
    // // Retorna Promise o Observable con ValidationErrors {} o nul si es correcto
    // validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        
    //     const email = control.value;

    // // Construimos el Observable
    //     return of ({
    //         emailtaken: true
    //     }).pipe(
    //         delay( 2000 )
    //     )
    // }

    // // Opcional, para lanzar envento de cambio
    // registerOnValidatorChange?(fn: () => void): void {
    //     throw new Error('Method not implemented.');
    // }

}