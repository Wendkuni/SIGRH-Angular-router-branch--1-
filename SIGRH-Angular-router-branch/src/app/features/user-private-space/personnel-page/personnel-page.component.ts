import {Component, inject, Input, OnInit} from '@angular/core';
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {ToastModule} from "primeng/toast";
import {FileSelectEvent, FileUploadModule} from "primeng/fileupload";
import {AsyncPipe, DatePipe, NgClass, NgForOf, NgIf, NgOptimizedImage, UpperCasePipe} from "@angular/common";
import {BadgeModule} from "primeng/badge";
import {RippleModule} from "primeng/ripple";
import {TabMenuModule} from "primeng/tabmenu";
import {ChipModule} from "primeng/chip";
import {TableModule} from "primeng/table";
import {DividerModule} from "primeng/divider";
import {CalendarModule} from "primeng/calendar";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {TabViewModule} from "primeng/tabview";
import {PaginatorModule} from "primeng/paginator";
import {ReactiveFormsModule} from "@angular/forms";
import {TagModule} from "primeng/tag";
import {InputTextareaModule} from "primeng/inputtextarea";
import {Cols} from "../../../core/interface/primeng/primeng.model";
import {PersonnelService} from "../../../core/service/personne/personnel.service";
import {Observable} from "rxjs";
import {FonctionAgentComponent} from "../fonction-agent/fonction-agent.component";
import {ActivatedRoute} from "@angular/router";
import {DossierComponent} from "../dossier/dossier.component";
import {AffectationComponent} from "../affectation/affectation.component";
import {PersonnelResponse} from "../../../core/interface/entities/personnel.model";

@Component({
  selector: 'app-personnel-dossier',
  standalone: true,
    imports: [
        CardModule,
        InputTextModule,
        ToastModule,
        FileUploadModule,
        NgClass,
        BadgeModule,
        NgIf,
        NgForOf,
        NgOptimizedImage,
        RippleModule,
        TabMenuModule,
        ChipModule,
        TableModule,
        DividerModule,
        CalendarModule,
        DialogModule,
        DropdownModule,
        InputNumberModule,
        TabViewModule,
        PaginatorModule,
        ReactiveFormsModule,
        TagModule,
        UpperCasePipe,
        DatePipe,
        InputTextareaModule,
        AsyncPipe,
        FonctionAgentComponent,
        DossierComponent,
        AffectationComponent
    ],
  templateUrl: './personnel-page.component.html',
  styleUrl: './personnel-page.component.scss',
})
export class PersonnelPageComponent implements OnInit{
  formVisibility = false; //affiche le formulaire d'ajout
  affectationFormVisibility = false; //affiche le formulaire d'affectation
// colonne du tableau
  cols: Cols[] = [
    { field: 'nom', header: 'Nom Dossier' },
    { field: 'date', header: 'Date' },
    { field: 'observation', header: 'Observation' },
    { field: 'images', header: 'Images' }
  ]
  // Tableau des affectations
  colFocntion: Cols[] = [
    { field: 'matricule', header: 'Matricule' },
    { field: 'nometprenom', header: 'Nom Prenom' },
    {field: 'nature', header: 'Nature'},
    {field: 'dren', header: 'DREN'},
    {field: 'localite', header: 'Localite'},
    {field: 'moughataa', header: 'Moughataa'},
    {field: 'ecole', header: 'Ecole'},
    { field: 'notepedagogique', header: 'Note Pedagogique' },
    {field: 'dateEffet', header: 'Date Effet'}
    ];

  colsFonction: Cols[] = [
    {field: 'fonction', header: 'Fonction'},
    {field: 'dateEffet', header: 'Date Effet'}
    ];


  personalService = inject(PersonnelService)
    router = inject(ActivatedRoute);
  personnel: PersonnelResponse = {} as PersonnelResponse;

  ngOnInit(): void {
      let id  = this.router.snapshot.paramMap.get('id');

      if(id != null){
          this.getPersonnel(id);
      }
  }


    getPersonnel(id:string){
        this.personalService.getPersonnelById(id).subscribe((response)=>{
            this.personnel = response;
        })
    }
}
