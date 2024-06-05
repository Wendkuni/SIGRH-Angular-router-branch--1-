import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dossier, PersonnelRequest, PersonnelResponse} from "../../interface/entities/personnel.model";

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {
  // url du server Json
    //private readonly url = 'http://localhost:3000/personnels';
    private readonly url = 'http://localhost:8081/v1/api';
    // Inject HttpClient
  http = inject(HttpClient);

    // get all personnels
    getAllPersonnels(){
    return this.http.get<PersonnelResponse[]>(`${this.url}/personnels`);
    }

    // get personnel by id
    getPersonnelById(id: string){
        return this.http.get<PersonnelResponse>(`${this.url}/personnelsBy/${id}`);
    }

    // create personnel
    addPersonnel(personnel: PersonnelRequest){
        return this.http.post(`${this.url}/personnel` personnel);
    }

    // update personnel
    updatePersonnel(id: bigint, personnel: PersonnelRequest){
        return this.http.patch(`${this.url}/personnel/${id}`, personnel);
    }

    // delete personnel
    deletePersonnel(personnel: PersonnelResponse){
        return this.http.delete(`${this.url}/personnel/delete/${personnel.id}`);
    }

  //   get all dossiers
    getAllDossiers(){
        return this.http.get<Dossier[]>(`${this.url}/dossiers`);
    }


}
