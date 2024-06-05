import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Mobilite} from "../../interface/entities/mobilite.model";

@Injectable({
  providedIn: 'root'
})
export class MobiliteService {
    // url du server Json
    url = 'http://localhost:3000/mobilites';

    // Inject HttpClient
    http = inject(HttpClient);

    // get all mobilites
    getAllMobilites(){
        return this.http.get<Mobilite[]>(this.url);
    }

    // get mobilite by id
    getMobiliteById(id: string){
        return this.http.get<Mobilite>(`${this.url}/${id}`);
    }

    // create mobilite
    addMobilite(mobilite: Mobilite){
        return this.http.post(this.url, mobilite);
    }

    // update mobilite
    updateMobilite(id: string, mobilite: Mobilite){
        return this.http.patch(`${this.url}/${id}`, mobilite);
    }

    // delete mobilite
    deleteMobilite(mobilite: Mobilite){
        return this.http.delete(`${this.url}/${mobilite.id}`);
    }
}
