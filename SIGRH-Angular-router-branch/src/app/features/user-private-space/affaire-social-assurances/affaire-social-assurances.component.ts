import {Component, inject, OnInit} from '@angular/core';
import {Cols} from "../../../core/interface/primeng/primeng.model";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {RouterLink} from "@angular/router";
import {MessageService, SharedModule} from "primeng/api";
import {Table, TableModule} from "primeng/table";
import {TagModule} from "primeng/tag";
import {ToolbarModule} from "primeng/toolbar";
import {TooltipModule} from "primeng/tooltip";
import {AsyncPipe, UpperCasePipe} from "@angular/common";
import {CalendarModule} from "primeng/calendar";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Assurance} from "../../../core/interface/entities/affaire-social-assurance.model";
import {
    AssuranceAffaireSocialService
} from "../../../core/service/assurance-affaire-social/assurance-affaire-social.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-affaire-social-assurances',
  standalone: true,
    imports: [
        ButtonModule,
        CardModule,
        InputTextModule,
        RippleModule,
        RouterLink,
        SharedModule,
        TableModule,
        TagModule,
        ToolbarModule,
        TooltipModule,
        UpperCasePipe,
        CalendarModule,
        DialogModule,
        DropdownModule,
        InputNumberModule,
        FormsModule,
        ReactiveFormsModule,
        AsyncPipe
    ],
  templateUrl: './affaire-social-assurances.component.html',
  styleUrl: './affaire-social-assurances.component.scss',
    providers: [MessageService]
})
export class AffaireSocialAssurancesComponent implements OnInit{
//   Colonnes du tableau Assurances
  cols: Cols[] = [
    {field: 'matricule', header: 'Matricule'},
    {field: 'nometprenom', header: 'Nom prénom'},
    {field: 'designation', header: 'Désignation'},
    {field: 'dateDebut', header: 'Date début'},
    {field: 'dateFin', header: 'Date fin'},
    {field: 'etat', header: 'Etat'},
    {field: 'nombredepersonne', header: 'Nombre de personne'},
    {field: 'Type', header: 'Type'}
  ];

messaService = inject(MessageService);
  listAssurances$!: Observable<Assurance[]>; //liste des assurances
 assuranceFormVisibility = false; //affiche le formulaire d'ajout d'assurance
  assuranceService= inject(AssuranceAffaireSocialService);

  showAssuranceForm() {
    this.assuranceFormVisibility = true;
  }

  ngOnInit(): void {
    this.getAllAssurances();
  }

    // Methode pour filtrer les elements du tableau
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    async  getAllAssurances() {
    this.listAssurances$ = await this.assuranceService.getAllAssurances();
  }

  saveAssurance(assurance: Assurance) {
  if(assurance.id){
    this.createAssurance(assurance);
  }
    else{
        this.updateAssurance(assurance);  }
}

      createAssurance(assurance: Assurance) {
     this.assuranceService.addAssurance(assurance).subscribe(
         next => {
                this.getAllAssurances();
                this.messaService.add({severity: 'success', summary: 'Success', detail: 'Assurance ajoutée avec succès'});
         },
         error => {
                this.messaService.add({severity: 'error', summary: 'Error', detail: 'Erreur lors de l\'ajout de l\'assurance'});
         }
     );
  }

    updateAssurance(assurance: Assurance) {
        this.assuranceService.updateAssurance(assurance).subscribe(
            next => {
                this.getAllAssurances();
                this.messaService.add({severity: 'success', summary: 'Success', detail: 'Assurance modifiée avec succès'});
            },
            error => {
                this.messaService.add({severity: 'error', summary: 'Error', detail: 'Erreur lors de la modification de l\'assurance'});
            }
        );
    }

    deleteAssurance(assurance: Assurance) {
        this.assuranceService.deleteAssurance(assurance).subscribe(
            next => {
                this.getAllAssurances();
                this.messaService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'Assurance supprimée avec succès'
                });
            },
            error => {
                this.messaService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Erreur lors de la suppression de l\'assurance'
                });

            });
    }
}
