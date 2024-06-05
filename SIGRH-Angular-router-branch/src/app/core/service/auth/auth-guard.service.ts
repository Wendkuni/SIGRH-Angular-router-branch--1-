import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
    public auth = inject(AuthService);
    public router = inject(Router);

  constructor() { }

    canActivate(): boolean {
        if(this.auth.isAuthenticated()){
            return true;
        }else {
            this.router.navigate(['login']);
            return false;
        }
    }
}
