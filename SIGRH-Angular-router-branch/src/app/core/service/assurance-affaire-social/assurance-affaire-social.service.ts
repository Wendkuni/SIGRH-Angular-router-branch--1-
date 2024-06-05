import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Assurance} from "../../interface/entities/affaire-social-assurance.model";

@Injectable({
  providedIn: 'root'
})
export class AssuranceAffaireSocialService {


  // url du server Json
  url = 'http://localhost:3000/assurances';
  // Inject HttpClient
  http = inject(HttpClient);

    // get all assurances
   getAllAssurances(){
    return this.http.get<Assurance[]>(this.url);
   }


    // get assurance by id
    getAssuranceById(id: number){
        return this.http.get<Assurance>(`${this.url}/${id}`);
    }

    // create assurance
    addAssurance(assurance: Assurance){
        return this.http.post(this.url, assurance);
    }

    // update assurance
    updateAssurance(assurance: Assurance){
        return this.http.patch(`${this.url}/${assurance.id}`, assurance);
    }

    // delete assurance
    deleteAssurance(assurance: Assurance){
        return this.http.delete(`${this.url}/${assurance.id}`);
    }

}
