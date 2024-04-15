import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class ValidatorService {

    public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
    public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

    public cantBeStrider = (control: FormControl): ValidationErrors | null => {

        const value: string = control.value.trim().toLowerCase();

        if (value === 'strider') {
            return {
                noStrider: true
            }
        }
        return null;
    }

    public isInvalidField(form: FormGroup, field: string): boolean | null {
        return form.controls[field] && form.controls[field].errors
            && form.controls[field].touched;
    }

    /*
    * Este método se llama desde los validators globales del FormGroup
    */
    public isFieldOneEqualsToFieldTwo ( field1: string, field2: string ) {

        /*
        * Retorna una función que tiene como tipo de parámetro un FormGroup.
        * es de tipo AbstractControl pero en este caso sabemos que es un FormGroup.
        * Sim embargo es mejor usar AbstractControl puesto que sino nos marca como deprecated en 
        * register-page.component.ts => public myForm: FormGroup = this.formBuilder.group
        * 
        * Si quisiéramos hacerla async, es la función de retorno la que ha de tener Promise / Observable
        */
        return ( formGroup: AbstractControl /*FormGroup*/): ValidationErrors | null => {

            const fieldValue1 =  formGroup.get(field1)?.value;
            const fieldValue2 =  formGroup.get(field2)?.value;

            if( fieldValue1 !== fieldValue2 ){
                formGroup.get(field2)?.setErrors({ notEqual: true });
                return { notEqual: true };
            }

            // OJO que así borramos TODOS los errores del field2
            formGroup.get(field2)?.setErrors(null);
            return null;

        } 
    }

}