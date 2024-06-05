import {Component, inject, OnInit} from '@angular/core';
import {Cols} from "../../../core/interface/primeng/primeng.model";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {RippleModule} from "primeng/ripple";
import {SharedModule} from "primeng/api";
import {ToolbarModule} from "primeng/toolbar";
import {AsyncPipe, DatePipe} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {Table, TableModule} from "primeng/table";
import {Couriel} from "../../../core/interface/entities/couriel.model";
import {CourielService} from "../../../core/service/couriels/couriel.service";
import {Event} from "@angular/router";

@Component({
  selector: 'app-couriel',
  standalone: true,
    imports: [
        ButtonModule,
        CardModule,
        RippleModule,
        SharedModule,
        ToolbarModule,
        AsyncPipe,
        InputTextModule,
        TableModule,
        DatePipe
    ],
  templateUrl: './couriel.component.html',
  styleUrl: './couriel.component.scss'
})
export class CourielComponent implements OnInit{

    showDialog = false;
    listCouriels$!: Couriel[]; //liste des couriels
    courielService = inject(CourielService);

    //   Colonnes du tableau Couriel
    cols: Cols[] = [
        {field: 'libelle', header: 'Libellé'},
        {field: 'type', header: 'Type'},
        {field: 'source', header: 'Source'},
        {field: 'sens', header: 'Sens'},
        {field: 'categorie', header: 'Catégorie'},
        {field: 'observation', header: 'Observation'},
        {field: 'designation', header: 'Désignation'},
        {field: 'ventilation', header: 'Ventilation'},
        {field: 'dateVentilation', header: 'Date Ventilation'},
        {field: 'object', header: 'Object'},
        {field: 'numDoc', header: 'N/DOC'},
        {field: 'annotation', header: 'Annotation'},
        {field: 'se', header: 'SE'},
        {field: 'dateCouriel', header: 'Date Couriel'},
    ];

    ngOnInit(): void {
        this.getAllCouriels();
    }

    // Methode pour filtrer les elements du tableau
    // onGlobalFilter(table: Table, event: Event) {
    //     table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    // }



    //Methode pour afficher le formulaire d'ajout
    showForm() {
        this.showDialog = true;
    }

    // Methode pour lister un couriel
    private getAllCouriels() {
        this.courielService.getAllCouriels().subscribe((response:Couriel[]) => {
            this.listCouriels$ = response;
        });
    }
}
