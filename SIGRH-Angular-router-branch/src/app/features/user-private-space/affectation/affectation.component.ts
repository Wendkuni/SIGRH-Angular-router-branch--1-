import {Component, inject, Input, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {AsyncPipe, DatePipe} from "@angular/common";
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {MobiliteService} from "../../../core/service/mobilite/mobilite.service";
import {Cols} from "../../../core/interface/primeng/primeng.model";
import {CalendarModule} from "primeng/calendar";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextModule} from "primeng/inputtext";
import {Mobilite} from "../../../core/interface/entities/mobilite.model";
import {FormValidatorsComponent} from "../../shared/form-validators/form-validators.component";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {PersonnelResponse} from "../../../core/interface/entities/personnel.model";
import {TooltipModule} from "primeng/tooltip";

@Component({
  selector: 'app-affectation',
  standalone: true,
    imports: [
        ButtonModule,
        RippleModule,
        AsyncPipe,
        CardModule,
        DatePipe,
        TableModule,
        CalendarModule,
        DialogModule,
        DropdownModule,
        InputNumberModule,
        InputTextModule,
        FormValidatorsComponent,
        ReactiveFormsModule,
        TooltipModule
    ],
  templateUrl: './affectation.component.html',
  styleUrl: './affectation.component.scss'
})
export class AffectationComponent implements OnInit{
    showDialog = false;
    listAffections$!: Mobilite[]; //liste des affections
    mobiliteService = inject(MobiliteService);
    formAffection!: FormGroup;
    fb = inject(FormBuilder);
    @Input() personnel!: PersonnelResponse;

    cols: Cols[] = [
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

    // Nature de l'affectation
    nature = [
        'Convenance Personnelle',
        'Necessite de Service',
        'Nominative',
        'Permutation'
    ];

    ngOnInit(): void {
        this.formAffection = this.fb.group({
            nature: ['', Validators.required],
            dren: ['', Validators.required],
            localite: ['', Validators.required],
            moughataa: ['', Validators.required],
            ecole: ['', Validators.required],
            notepedagogique: ['', Validators.required],
            dateEffet: ['', Validators.required]
        });

        this.getAllAffections();
    }

    //Methode pour afficher le formulaire d'ajout
    showForm() {
        this.showDialog = true;
    }


    private getAllAffections() {
        this.mobiliteService.getAllMobilites().subscribe((response:Mobilite[]) => {
            this.listAffections$ = response;
        });
    }
}
