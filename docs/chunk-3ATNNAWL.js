import{b as q,c,d as B,e as R,g as V,k as M,m as O,n as k,o as D}from"./chunk-QCIW4NRC.js";import{A as F,D as h,E as f,G as t,H as i,I as p,K as j,M as r,N as v,O as y,Q as s,R as d,V as N,W as P,X as T,ba as I,d as b,h as w,k as S,l as g,p as C,q as E,z as m}from"./chunk-GHJYRU23.js";var L=(()=>{let e=class e{constructor(){this.firstNameAndLastnamePattern="([a-zA-Z]+) ([a-zA-Z]+)",this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",this.cantBeStrider=l=>l.value.trim().toLowerCase()==="strider"?{noStrider:!0}:null}isInvalidField(l,o){return l.controls[o]&&l.controls[o].errors&&l.controls[o].touched}isFieldOneEqualsToFieldTwo(l,o){return a=>{let u=a.get(l)?.value,U=a.get(o)?.value;return u!==U?(a.get(o)?.setErrors({notEqual:!0}),{notEqual:!0}):(a.get(o)?.setErrors(null),null)}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var z=(()=>{let e=class e{validate(l){let o=l.value;return new b(u=>{o==="a@a.as"&&(u.next({emailTaken:!0}),u.complete()),u.next(null),u.complete()}).pipe(w(2e3))}registerOnValidatorChange(l){throw new Error("Method not implemented.")}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=S({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function J(n,e){n&1&&(t(0,"span",15),r(1," Debe de ser en formato de nombre y apellido "),i())}function $(n,e){n&1&&(t(0,"span",15),r(1," Mensaje de error del email "),i())}function H(n,e){n&1&&(t(0,"span",15),r(1," El username es obligatorio y no puede ser Strider "),i())}function K(n,e){n&1&&(t(0,"span",15),r(1," La contrase\xF1a debe de ser mayor de 6 caracteres. "),i())}function Q(n,e){n&1&&(t(0,"span",15),r(1," Las contrase\xF1as deben de ser iguales "),i())}var A=(()=>{let e=class e{constructor(l,o,a){this.fb=l,this.validatorsService=o,this.emailValidator=a,this.myForm=this.fb.group({name:["",[c.required,c.pattern(this.validatorsService.firstNameAndLastnamePattern)]],email:["",[c.required,c.pattern(this.validatorsService.emailPattern)],[this.emailValidator]],username:["",[c.required,this.validatorsService.cantBeStrider]],password:["",[c.required,c.minLength(6)]],password2:["",[c.required]]},{validators:[this.validatorsService.isFieldOneEqualsToFieldTwo("password","password2")]})}isInvalidField(l){return this.validatorsService.isInvalidField(this.myForm,l)}getFieldError(l){if(!this.myForm.controls[l]&&!this.myForm.controls[l].errors)return null;let o=this.myForm.controls[l].errors||{};for(let a of Object.keys(o))switch(a){case"required":return"Este campo es requerido";case"requiredTrue":return"Debe de aceptar las condiciones de uso"}return null}onSubmit(){if(this.myForm.invalid){this.myForm.markAllAsTouched();return}}};e.\u0275fac=function(o){return new(o||e)(F(k),F(L),F(z))},e.\u0275cmp=C({type:e,selectors:[["ng-component"]],decls:98,vars:33,consts:[[1,"row"],[1,"col"],["autocomplete","off",3,"ngSubmit","formGroup"],[1,"row","mb-3"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["formControlName","name","type","text","placeholder","Nombre del usuario",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["formControlName","email","type","email","placeholder","Email del usuario",1,"form-control"],["formControlName","username","type","text","placeholder","Nombre c\xF3digo del usuario",1,"form-control"],["formControlName","password","type","password","placeholder","Password de su cuenta",1,"form-control"],["formControlName","password2","type","password","placeholder","Confirmar la contrase\xF1a",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end"],[1,"row","mt-4"],[1,"col-12","col-sm-4"],[1,"form-text","text-danger"]],template:function(o,a){o&1&&(t(0,"h2"),r(1,"Validaciones Reactivas"),i(),p(2,"hr"),t(3,"div",0)(4,"div",1)(5,"form",2),j("ngSubmit",function(){return a.onSubmit()}),t(6,"div",3)(7,"label",4),r(8,"Nombre"),i(),t(9,"div",5),p(10,"input",6),h(11,J,2,0,"span",7),i()(),t(12,"div",3)(13,"label",4),r(14,"Email"),i(),t(15,"div",5),p(16,"input",8),h(17,$,2,0,"span",7),i()(),t(18,"div",3)(19,"label",4),r(20,"Username"),i(),t(21,"div",5),p(22,"input",9),h(23,H,2,0,"span",7),i()(),t(24,"div",3)(25,"label",4),r(26,"Password"),i(),t(27,"div",5),p(28,"input",10),h(29,K,2,0,"span",7),i()(),t(30,"div",3)(31,"label",4),r(32,"Confirmar"),i(),t(33,"div",5),p(34,"input",11),h(35,Q,2,0,"span",7),i()(),t(36,"div",0)(37,"div",1)(38,"button",12),r(39," Crear "),i()()()()()(),p(40,"hr"),t(41,"div",13)(42,"div",14)(43,"h4"),r(44,"Form state"),i(),t(45,"h6"),r(46),s(47,"json"),i(),t(48,"h6"),r(49),s(50,"json"),i(),t(51,"h6"),r(52),s(53,"json"),i(),p(54,"br"),r(55," Con "),t(56,"code"),r(57,'Form Status: "Pending"'),i(),r(58," o "),t(59,"code"),r(60,"Form Pending: true"),i(),r(61,", el formualrio est\xE1 esperando la respuesta de una validaci\xF3n async. "),i(),t(62,"div",14)(63,"h4"),r(64,"Form errors"),i(),t(65,"h5"),r(66,"Nombre"),i(),t(67,"pre"),r(68),s(69,"json"),i(),t(70,"h5"),r(71,"Email"),i(),t(72,"pre"),r(73),s(74,"json"),i(),t(75,"h5"),r(76,"Username"),i(),t(77,"pre"),r(78),s(79,"json"),i()(),t(80,"div",14)(81,"h4"),r(82,"Passwords"),i(),t(83,"h5"),r(84,"Password"),i(),t(85,"pre"),r(86),s(87,"json"),i(),t(88,"h5"),r(89,"Confirmar"),i(),t(90,"pre"),r(91),s(92,"json"),i(),t(93,"h5"),r(94,"Errores password2"),i(),t(95,"pre"),r(96),s(97,"json"),i()()()),o&2&&(m(5),f("formGroup",a.myForm),m(6),f("ngIf",a.isInvalidField("name")),m(6),f("ngIf",a.isInvalidField("email")),m(6),f("ngIf",a.isInvalidField("username")),m(6),f("ngIf",a.isInvalidField("password")),m(6),f("ngIf",a.isInvalidField("password2")),m(11),y("Form Valid: ",d(47,15,a.myForm.valid),""),m(3),y("Form Status: ",d(50,17,a.myForm.status),""),m(3),y("Form Pending: ",d(53,19,a.myForm.pending),""),m(16),v(d(69,21,a.myForm.controls.name.errors)),m(5),v(d(74,23,a.myForm.controls.email.errors)),m(5),v(d(79,25,a.myForm.controls.username.errors)),m(8),v(d(87,27,a.myForm.value.password)),m(5),v(d(92,29,a.myForm.value.password2)),m(5),v(d(97,31,a.myForm.controls.password2.errors)))},dependencies:[N,V,q,B,R,M,O,P]});let n=e;return n})();var W=[{path:"",children:[{path:"sign-up",component:A},{path:"**",redirectTo:"sign-up"}]}],_=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=E({type:e}),e.\u0275inj=g({imports:[I.forChild(W),I]});let n=e;return n})();var pe=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=E({type:e}),e.\u0275inj=g({imports:[T,_,D]});let n=e;return n})();export{pe as AuthModule};
