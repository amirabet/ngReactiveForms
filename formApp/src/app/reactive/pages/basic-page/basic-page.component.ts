import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const rtx5090 = {
  name: 'RTC 5090',
  price: 4100,
  inStorage: 20
} 

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})

export class BasicPageComponent implements OnInit{

  /*
  * Para crear el Formulario reactivo
  * 1. Importar en el módulo ReactiveFormsModule
  * 2. Instanciar FormGroup
  */
  //public myForm: FormGroup = new FormGroup{
  //  propName: new FormControl('valueDelCampo', [ValidacionesSíncronas], [ValidacionesAsíncronas])
  //}

  /*
  * podemos crear el formulario reactivmo mediante el Servicio FormBuilder
  */
  constructor (private formBuilder: FormBuilder) {}

  // usando el FormBuilder
  public myForm: FormGroup = this.formBuilder.group({
  //  propName: [ 'valueDelCampo', [ValidacionesSíncronas], [ValidacionesAsíncronas] ]
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    price: [0, [ Validators.required, Validators.min(0) ]],
    inStorage: [0, [ Validators.required, Validators.min(0) ]],
  });

  /*
  * El escenario más comun es el de recibir de back
  * los datos iniciales y rellenar el form en el OnInit
  */
  ngOnInit(): void {
    this.myForm.reset(rtx5090);
  }

  /*
  * Podemos usar un método / getter para obtener lo mensajes de validación
  */
 isInvalidField (field: string): boolean | null {
  return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched;
 }

 getFieldError (field: string): string | null {
    if( !this.myForm.controls[field] && !this.myForm.controls[field].errors )
        return null;

    const errors = this.myForm.controls[field].errors || {};
    console.log({errors})

    for (const key of Object.keys(errors)) {
      switch( key ){
        case 'required':
          return 'Este campo es requerido';

          case 'minlength':
            return `La longitud mínima es ${ errors['minlength'].requiredLength } caracter/es`;
      }
    }

    return null;
 }

  onSave():void {
    if( this.myForm.invalid) {
      this.myForm.markAllAsTouched(); // Dispara validaciones en todos los campos si trabajamos con Touched
      return;
    }

    console.log( this.myForm.value );

    /*
    * Volvemos a recuperar los valores
    * y la hacer reset las propiedades 
    * Pristine y Touched del formulario
    * también se resetean
    * 
    * Podríamos usar una función como la que se
    * emplea en el OnInit
    */
    this.myForm.reset(
      {
        name: '',
        price: 41,
        inStorage: 0
      }
    )

    /*
    * Si en cambio usamos el setValue
    * también cambiamos el valor de los campos
    * per Pristine y Touched mantienen su valor
    */
    // this.myForm.setValue(
    //   {
    //     name: '',
    //     price: 41,
    //     inStorage: 0
    //   }
    // )
  }

}
