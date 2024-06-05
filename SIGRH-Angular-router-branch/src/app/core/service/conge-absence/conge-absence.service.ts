import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DemandeConge} from "../../interface/entities/conge_absence.model";

@Injectable({
  providedIn: 'root'
})
export class CongeAbsenceService {
  // url du server Json
  url = 'http://localhost:3000/conges';
    // Inject HttpClient
  http = inject(HttpClient);

    // get all demandes
    getAllDemandes(){
    return this.http.get<DemandeConge[]>(this.url);
    }

// get demande by id
    getDemandeById(id: number){
        return this.http.get<DemandeConge>(`${this.url}/${id}`);
    }

    // create demande
    addDemande(demande: DemandeConge){
        return this.http.post(this.url, demande);
    }

    // update demande
    updateDemande(demande: DemandeConge){
        return this.http.patch(`${this.url}/${demande.id}`, demande);
    }

    // delete demande
    deleteDemande(demande: DemandeConge){
        return this.http.delete(`${this.url}/${demande.id}`);
    }


}
