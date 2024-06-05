import {Component, inject} from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import {FormBuilder, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";
import {AuthService} from "../../../../core/service/auth/auth.service";
import {Router} from "@angular/router";
import {Utilisateur} from "../../../../core/interface/entities/user.model";

@Component({
    templateUrl: './login2.component.html',
    providers: [MessageService]
})
export class Login2Component {
    layoutService = inject(LayoutService);
    authService = inject(AuthService);
    router = inject(Router);
    fb = inject(FormBuilder);
    messageService = inject(MessageService);
    forgotPassFormVisible: boolean = false;

    // Formulaire de connexion
    loginForm = this.fb.group({
        email: this.fb.control('', [Validators.required, Validators.email]),
        password: this.fb.control('', [Validators.required]),
    });

    // Formulaire de mot de passe oublié
    forgotPasswordForm = this.fb.group({
        email: this.fb.control('', [Validators.required, Validators.email])
    });

    get dark(): boolean {
        return this.layoutService.config().colorScheme !== 'light';
    }

    handleLogin() {
        const email: any = this.loginForm.value.email;
        const passwd: any = this.loginForm.value.password;
        this.authService.getAllUsers().subscribe((users: Utilisateur[]) => {
            const user = users.find((user) => user.email === email && user.password === passwd);
            if (user != null) {
                console.log(user);
                localStorage.setItem('user', JSON.stringify(user));
                this.router.navigateByUrl("/home");
            } else {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Email ou Mot de passe incorrect'
                });
            }
        });
    }

    showForgotPassForm() {
        this.forgotPassFormVisible = true;
    }

    close() {
        this.forgotPassFormVisible = false;
        this.forgotPasswordForm.reset();
    }

}
