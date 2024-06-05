import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Utilisateur} from "../../interface/entities/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    apiEndpoint = 'http://localhost:3000/users'; // URL to web api
    http = inject(HttpClient);// Inject HttpClient

    isAuthenticated() {
        let currentUser:Utilisateur = JSON.parse(localStorage.getItem('user') as string);
        if(currentUser){
            return true;
        }
        else {
            return false;
        }
    }

    // get all users
    getAllUsers(){
        return this.http.get<Utilisateur[]>(this.apiEndpoint);
    }

    getUserByEmailAndPassword(email: string, password: string){
        return this.http.get<Utilisateur>(`${this.apiEndpoint}?email=${email}&password=${password}`);
    }

    // get user by id
    getUserById(id: number){
        return this.http.get<Utilisateur>(`${this.apiEndpoint}/${id}`);
    }

    // create user
    addUser(user: Utilisateur){
        return this.http.post(this.apiEndpoint, user);
    }

    // update user
    updateUser(user: Utilisateur){
        return this.http.patch(`${this.apiEndpoint}/${user.id}`, user);
    }

    // delete user
    deleteUser(user: Utilisateur){
        return this.http.delete(`${this.apiEndpoint}/${user.id}`);
    }

}
