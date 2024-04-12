import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent {

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
    price: [0],
    inStorage: [0],
  });


  onSave():void {
    console.log( this.myForm.value);
  }

}
