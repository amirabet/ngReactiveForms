import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``
})
export class DynamicPageComponent {

  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    /* Esta propiedad es un listado de juegos
    * favoriteGames: new FormArray([]) => en vez de new FormControl()
    */
    favoriteGames: this.formBuilder.array([
      ['Metal Gear', Validators.required],
      ['Castlevania', Validators.required],
    ])
  })

  public newFavorite: FormControl = new FormControl('', Validators.required );

  constructor(private formBuilder: FormBuilder) { }

  /*
  * Getter de Favorite Games 
  * observar el cast "as FormArray"
  */
  get favoriteGamesControl() {
    return this.myForm.get('favoriteGames') as FormArray;
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

        case 'minlength':
          return `La longitud mínima es ${errors['minlength'].requiredLength} caracter/es`;
      }
    }

    return null;
  }

  isInvalidFieldInArray(formArray: FormArray, index: number) {
    return formArray.controls[index].errors
      && formArray.controls[index].touched;
  }

  onDeleteFavorite(index: number): void {
    this.favoriteGamesControl.removeAt(index);
  }

  onAddFavorite(): void {
    if (this.newFavorite.invalid)
      return;

    const newFavorite: string = this.newFavorite.value;

    // Agregar al array generando un new FormControl
    //this.favoriteGamesControl.push( new FormControl( newFavorite, Validators.required ) );

    // Agregar usando el formBuilder (recomendado)
    this.favoriteGamesControl.push(
      this.formBuilder.control( newFavorite, Validators.required )
    );

    // Reseteamos el campo
    this.newFavorite.reset();
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    /*
    * Reseteamos el valor de favoriteGames igualándolo
    * a un nuevo array de formBuilder
    * OJO el casteo "as FormArray"
    */
    (this.myForm.controls['favoriteGames'] as FormArray) = this.formBuilder.array([]);

    // Borramos el resto de valores
    this.myForm.reset();
  }
}
