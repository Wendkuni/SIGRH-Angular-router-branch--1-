import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login2RoutingModule } from './login2-routing.module';
import { Login2Component } from './login2.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppConfigModule } from 'src/app/layout/config/app.config.module';
import { RippleModule } from 'primeng/ripple';
import {FormValidatorsComponent} from "../../../../features/shared/form-validators/form-validators.component";
import {ToastModule} from "primeng/toast";
import {DialogModule} from "primeng/dialog";
import {PasswordModule} from "primeng/password";

@NgModule({
    imports: [
        CommonModule,
        Login2RoutingModule,
        ButtonModule,
        InputTextModule,
        CheckboxModule,
        FormsModule,
        AppConfigModule,
        RippleModule,
        ReactiveFormsModule,
        FormValidatorsComponent,
        ToastModule,
        DialogModule,
        PasswordModule
    ],
    declarations: [Login2Component]
})
export class Login2Module { }
