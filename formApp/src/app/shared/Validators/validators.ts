import { FormControl, ValidationErrors } from "@angular/forms";

/*
* Regex varios
*/ 

// Nombre y Apellido separado por espacio
export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

// email, ya que la validación por defecto de Angular andimte @XXX sin extensión de dominio (.es)
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

/*
* La constante de validación contiene un método.
* Idealmente se ha de ocupar de una sola funcionalidad 8se pueden encadenar).
* Si devuelve null es que la validación es correcta
* De lo contrario podemos devolver string
* o un objeto validationErrorscon más información sobre el error
*/
export const cantBeStrider = (control: FormControl): ValidationErrors | null => {

    const value: string = control.value.trim().toLowerCase();

    if (value === 'strider') {
        return {
            noStrider: true
        }
    }
    return null;
}