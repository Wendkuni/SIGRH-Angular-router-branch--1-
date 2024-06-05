import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Remuneration} from "../../interface/entities/renumeration.model";

@Injectable({
  providedIn: 'root'
})
export class RemunerationService {
    //Api URL for remuneration
private readonly API_URL = 'http://localhost:3000/remunerations';

//Inject HttpClient
http = inject(HttpClient);

//Get all remunerations
    getAllRemunerations() {
        return this.http.get<Remuneration[]>(this.API_URL);
    }

    // Add remuneration
    addRemuneration(remuneration: Remuneration) {
        return this.http.post<Remuneration>(this.API_URL, remuneration);
    }

    // Update remuneration
    updateRemuneration(id: bigint, remuneration: Remuneration) {
        return this.http.patch<Remuneration>(`${this.API_URL}/${id}`, remuneration);
    }

    // Delete remuneration
    deleteRemuneration(remuneration: Remuneration) {
        return this.http.delete<Remuneration>(`${this.API_URL}/${remuneration.IDRENUMERATIONAGENT}`);
    }

}
