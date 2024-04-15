import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue]
  });

  /* Person no necesita la propiedad termsAndConditions
  * la extraeremos desestrucurando el objecto myForm.value
  * y guardando el resto (en onSubmit())
   */
  public person = {
    gender: 'F',
    wantNotifications: false
  }

  constructor(private fb: FormBuilder) { }
    ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  /*
  * Como este método se usa en varios componentes,
  * lo ideal es inyectar el servicio "validators.services"
  * que contine esta lógica (ver ejemplo en register-page.component)
  */
  isInvalidField(field: string): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
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
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

    /*
    * Desestructuramos el objecto para separar el TermsAndConditions
    * del resto de propiedades para pasarlo a la persona
     */ 
    const { termsAndConditions, ...newPerson } = this.myForm.value;
    this.person = newPerson;
  }
}
