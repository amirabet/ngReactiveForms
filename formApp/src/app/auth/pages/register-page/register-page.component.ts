import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// OJO impport custom para usar todos los customvalidators, muy útil
// aunque no lo usaremos ya que el Service inyectado hará todo el trabajo
import  * as customValidators from '../../../shared/Validators/validators';

import { ValidatorService } from '../../../shared/services/validators.service';
import { EmailValidatorService } from '../../../shared/Validators/email.validator';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  /*
  * Sin usar el servicio inyectado validatorsService
  */
  // public myForm: FormGroup = this.fb.group({
  //   name: [ '', [ Validators.required, Validators.pattern(customValidators.firstNameAndLastnamePattern) ] ], 
  //   // Para usar los customValidators con regex hemos de usar  Validators.pattern(regEx)
  //   email: [ '', [ Validators.required, Validators.pattern(customValidators.emailPattern) ] ],
  //   username: [ '', [ Validators.required, customValidators.cantBeStrider ] ],
  //   password: [ '', [ Validators.required, Validators.minLength(6) ] ],
  //   password2: [ '', [ Validators.required ] ],
  // });

  /*
  * this.fb.group => lo marca como deprecated porque en el ValidatorsService.ts => isFieldOneEqualsToFieldTwo
  * usamos como parámetro del método de  retorno el tipo FormGroup => nuevas versiones de Angular
  * recomiendan usar AbstractControl
  */
  public myForm: FormGroup = this.fb.group({
    name: [ '', [ Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern) ] ], 
    /* 
    * Para usar los customValidators con regex hemos de usar  Validators.pattern(regEx)
    * Aqui tb usamos EmailValidatorService, encargado de una validación async
    * En esta primera versión directamente usando el servicio
    */
    //email: [ '', [ Validators.required, Validators.pattern(this.validatorsService.emailPattern) ], [ new EmailValidatorService() ] ], => usando el servicio. OJO paréntesis finales!
    
    // Segunda opción con el servicio inyectado
    email: [ '', [ Validators.required, Validators.pattern(this.validatorsService.emailPattern) ], [ this.emailValidator ] ],
    username: [ '', [ Validators.required, this.validatorsService.cantBeStrider ] ],
    password: [ '', [ Validators.required, Validators.minLength(6) ] ],
    password2: [ '', [ Validators.required ] ],
  }, 
  /* 
  * Otro objecto dentro del FormGroup que adminte Validaciones de Formulario y otras maravillas
  * En este caso incuiremos la Validación por comparación de los valores de los campos de password
  * utizando el arreglo validators [].
  * La ventaja de este sistema es que disponemos aquí de TODOS los campos de formulario, no solo los de un campo solo 
  */
  {
    validators: [
      this.validatorsService.isFieldOneEqualsToFieldTwo('password','password2')
    ]
  });

  constructor(
    private fb: FormBuilder, 
    private validatorsService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) { }

  // TODO: crear servicio para gestionar estas funcionalidades
  isInvalidField(field: string): boolean | null {
    //
    //return this.myForm.controls[field].errors
    //  && this.myForm.controls[field].touched;
    //
    // usando los Services Inyectados
    return this.validatorsService.isInvalidField(this.myForm, field);
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field] && !this.myForm.controls[field].errors)
      return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'requiredTrue':
          return 'Debe de aceptar las condiciones de uso';
      }
    }

    return null;
  }


  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
  }
}
