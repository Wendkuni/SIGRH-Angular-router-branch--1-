import {Component, inject, Input, OnInit} from '@angular/core';
import {Cols} from "../../../core/interface/primeng/primeng.model";
import {CardModule} from "primeng/card";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {TableModule} from "primeng/table";
import {Avancement, Fonction} from "../../../core/interface/entities/fonction.model";
import {TooltipModule} from "primeng/tooltip";
import {CalendarModule} from "primeng/calendar";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {FonctionAgentService} from "../../../core/service/fonction-agent/fonction-agent.service";
import {Observable} from "rxjs";
import {AsyncPipe, UpperCasePipe} from "@angular/common";
import {InputTextareaModule} from "primeng/inputtextarea";
import {Dossier, PersonnelResponse} from "../../../core/interface/entities/personnel.model";
import {PersonnelService} from "../../../core/service/personne/personnel.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {FormValidatorsComponent} from "../../shared/form-validators/form-validators.component";
import {ActivatedRoute} from "@angular/router";
import {AvancementService} from "../../../core/service/avancement/avancement.service";

@Component({
  selector: 'app-fonction-agent',
  standalone: true,
    imports: [
        CardModule,
        ToolbarModule,
        ButtonModule,
        InputTextModule,
        RippleModule,
        TableModule,
        TooltipModule,
        CalendarModule,
        DialogModule,
        DropdownModule,
        InputNumberModule,
        AsyncPipe,
        InputTextareaModule,
        UpperCasePipe,
        ReactiveFormsModule,
        FormValidatorsComponent,
        FormsModule
    ],
  templateUrl: './fonction-agent.component.html',
  styleUrl: './fonction-agent.component.scss'
})
export class FonctionAgentComponent implements OnInit{

    listAvancement$!: Avancement[]; //liste des dossiers
    avancementService = inject(AvancementService);
    @Input() personnel!: PersonnelResponse;
    fonctionAgentForm!: FormGroup;
    fb = inject(FormBuilder);
    router = inject(ActivatedRoute);
    selectedAvancement!: Avancement;
    // colonne du tableau
    cols: Cols[] = [
        { field: 'fonction', header: 'Fonction' },
        { field: 'dateEffet', header: 'Date Effect' },
        { field: 'corps', header: 'Corps' },
        { field: 'grade', header: 'Grade' },
        { field: 'echelle', header: "Echelle"},
        { field: 'echellon', header: "Echellon"},
        { field: 'indice', header: "Indice"}
    ];
    // Nature de la fonction
    nature = [
        'Integration',
        'Titularisation',
        'Nominative',
        'Avancement',
        'Bonification',
        'Reclassement',
        'Sanction',
        'Decoration',
        'Demission',
        'Retraite',
        'Deces'
    ];


    ngOnInit(): void {
        this.fonctionAgentForm = this.fb.group({
            nature: this.fb.control('',[Validators.required]),
            corps: this.fb.control('',[Validators.required]),
            fonction: this.fb.control('',[Validators.required]),
            grade: this.fb.control('',[Validators.required]),
            echelle: this.fb.control('', [Validators.required]),
            echellon: this.fb.control('', [Validators.required]),
            dateEffet: this.fb.control('',[Validators.required])

        })
        this.getAvancements();
    }


    private getAvancements() {
        this.avancementService.getAllAvancements().subscribe((response) => {
            this.listAvancement$ = response;
        });
    }

    patchForm(selectedAvancement: Avancement) {
        this.fonctionAgentForm.patchValue(selectedAvancement);
    }

    cancel() {
        this.selectedAvancement = {} as Avancement;
        this.fonctionAgentForm.reset();
    }

}
