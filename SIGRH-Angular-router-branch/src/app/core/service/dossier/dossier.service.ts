import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Dossier} from "../../interface/entities/personnel.model";

@Injectable({
  providedIn: 'root'
})
export class DossierService {
    // url du server Json
    url = 'http://localhost:3000/dossiers';

    // Inject HttpClient
    http = inject(HttpClient);

    // get all dossiers
    getAllDossiers(){
        return this.http.get<Dossier[]>(this.url);
    }

    //add dossier
    addDossier(dossier: Dossier){
        return this.http.post(this.url, dossier);
    }

    //update dossier
    updateDossier(id: string, dossier: Dossier){
        return this.http.patch(`${this.url}/${id}`, dossier);
    }

    //delete dossier
    deleteDossier(dossier: Dossier){
        return this.http.delete(`${this.url}/${dossier.id}`);
    }
}
