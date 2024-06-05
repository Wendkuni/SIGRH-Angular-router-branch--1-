import {Component, inject, Input, OnInit} from '@angular/core';
import {Cols} from "../../../core/interface/primeng/primeng.model";
import {Observable} from "rxjs";
import {Dossier, PersonnelResponse} from "../../../core/interface/entities/personnel.model";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {DossierService} from "../../../core/service/dossier/dossier.service";
import {AsyncPipe, DatePipe, UpperCasePipe} from "@angular/common";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {FileUploadModule} from "primeng/fileupload";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-dossier',
  standalone: true,
    imports: [
        ButtonModule,
        RippleModule,
        AsyncPipe,
        TableModule,
        UpperCasePipe,
        DatePipe,
        DialogModule,
        FileUploadModule,
        InputTextModule
    ],
  templateUrl: './dossier.component.html',
  styleUrl: './dossier.component.scss'
})
export class DossierComponent implements OnInit{

    showDialog = false;
    lisDossiers$!: Dossier[]; //liste des dossiers
    dossierService = inject(DossierService);
    @Input() personnel!: PersonnelResponse;
// colonne du tableau
    cols: Cols[] = [
        { field: 'nom', header: 'Nom Dossier' },
        { field: 'date', header: 'Date' },
        { field: 'observation', header: 'Observation' },
        { field: 'images', header: 'Images' }
    ]

    ngOnInit(): void {
        this.getAllDossiers();
    }

    showForm() {
        this.showDialog = true;
    }


    private getAllDossiers() {
       this.dossierService.getAllDossiers().subscribe((response:Dossier[]) => {
           return this.lisDossiers$ = response;
       });
    }
}
