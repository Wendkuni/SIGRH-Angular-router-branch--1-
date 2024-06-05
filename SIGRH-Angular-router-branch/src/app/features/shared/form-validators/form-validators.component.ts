import {Component, Input} from '@angular/core';
import {FormGroup, ValidationErrors} from "@angular/forms";
import {MessageModule} from "primeng/message";

@Component({
  selector: 'app-form-validators',
  standalone: true,
  imports: [
    MessageModule
  ],
  template:`
    @if(formGroup.controls[entityField].touched &&
    formGroup.controls[entityField].errors){
      <ng-container>
        <small class="p-error">{{
            getMessageErrors(formGroup.controls[entityField].errors)
          }}</small>
      </ng-container>
    }
  `
})
export class FormValidatorsComponent {

  @Input() validationsError!: ValidationErrors[];
  @Input() entityField!: string;
  @Input() formGroup!: FormGroup;

  getMessageErrors(error : ValidationErrors | null){
    if (error) {
      if(error['required']){
        return "Ce champs est obligatoire !" ;
      }
      else if(error['minlength']){
        return "Ce champs doit contenir au moins !" + error['minlength']['requiredLength'] + " caractères"
      }
      else if(error['maxlength']){
        return "Ce champs doit contenir au plus !" + error['maxlength']['requiredLength'] + " caractères"
      }
      else if (error['pattern']){
        return "Ce champs n'est pas valide !"
      }
      else if (error['email']){
        return "Ce champs n'est pas valide !"
      }
      else if(error['phone']){
        return "Ce champs n'est pas valide !"
      }
      else return ""
    }
    else return ""
  }
}
