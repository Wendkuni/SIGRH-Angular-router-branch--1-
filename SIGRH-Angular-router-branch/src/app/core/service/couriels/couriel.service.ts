import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Couriel} from "../../interface/entities/couriel.model";

@Injectable({
  providedIn: 'root'
})
export class CourielService {
    // url du server Json
    private url = 'http://localhost:3000/couriels';

    // Inject HttpClient
    private http = inject(HttpClient);

    // get all couriels
    getAllCouriels(){
        return this.http.get<Couriel[]>(this.url);
    }

    //add couriel
    addCouriel(couriel: Couriel){
        return this.http.post(this.url, couriel);
    }

    //update couriel
    updateCouriel(id: string, couriel: Couriel){
        return this.http.patch(`${this.url}/${id}`, couriel);
    }

    //delete couriel
    deleteCouriel(couriel: Couriel){
        return this.http.delete(`${this.url}/${couriel.id}`);
    }
}
