import {Component, inject, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {RippleModule} from "primeng/ripple";
import {ToolbarModule} from "primeng/toolbar";
import {Cols} from "../../../core/interface/primeng/primeng.model";
import {InputTextModule} from "primeng/inputtext";
import {Table, TableModule} from "primeng/table";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {Remuneration, RemunerationWithAgent} from "../../../core/interface/entities/renumeration.model";
import {RemunerationService} from "../../../core/service/remuneration/remuneration.service";
import {PersonnelService} from "../../../core/service/personne/personnel.service";
import {Personnel, PersonnelResponse} from "../../../core/interface/entities/personnel.model";
import {CalendarModule} from "primeng/calendar";
import {DialogModule} from "primeng/dialog";
import {DividerModule} from "primeng/divider";
import {FileUploadModule} from "primeng/fileupload";
import {FormValidatorsComponent} from "../../shared/form-validators/form-validators.component";
import {InputNumberModule} from "primeng/inputnumber";
import {DropdownModule} from "primeng/dropdown";
import {TooltipModule} from "primeng/tooltip";

@Component({
  selector: 'app-remuneration',
  standalone: true,
    imports: [
        ToastModule,
        ButtonModule,
        CardModule,
        RippleModule,
        ToolbarModule,
        InputTextModule,
        TableModule,
        CalendarModule,
        DialogModule,
        DividerModule,
        FileUploadModule,
        FormValidatorsComponent,
        ReactiveFormsModule,
        InputNumberModule,
        DropdownModule,
        TooltipModule
    ],
  templateUrl: './remuneration.component.html',
  styleUrl: './remuneration.component.scss',
  providers: [MessageService]
})
export class RemunerationComponent implements OnInit{
    // colonne du tableau
    cols: Cols[] = [
        {field: 'nometprenom', header: 'Nom Prenom'},
        {field: 'matricule', header: 'Matricule'},
        {field: 'fonction', header: 'Fonction'},
        {field: 'netapayer', header: 'Net à payer'},
        {field: 'banque/complte', header: 'Banque/Compte'},
        {field: 'date', header: 'Date'},
        {field: 'corps', header: 'Corps'},
        {field: 'grade', header: 'Grade'},
        {field: 'echelon', header: 'Echelon'},
        {field: 'echelle', header: 'Echelle'},
        {field: 'indice', header: 'Indice'}
        ];
    remunerationForm!: FormGroup;
    fb = inject(FormBuilder);
    remunerationService = inject(RemunerationService);
    remunerations$!: Remuneration[];
    personnelService = inject(PersonnelService);
    listPersonnel!: PersonnelResponse[];
    formVisible: boolean = false;

    ngOnInit(): void {
        // Validation du formulaire
        this.remunerationForm = this.fb.group({
            matricule: this.fb.control('',[Validators.required]),
            netapayer: this.fb.control('',[Validators.required]),
            banquecompte: this.fb.control('',[Validators.required]),
            numCompte: this.fb.control('',[Validators.required]),
            date: this.fb.control('',[Validators.required]),
        });
        this.getRemunerations();
        this.getPersonnels();
    }

    // Methode pour filtrer les elements du tableau
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    // Methode pour recuperer les remunerations
    getRemunerations(){
        this.remunerationService.getAllRemunerations().subscribe((data) => {
            this.remunerations$ = data;
            console.log(this.remunerations$);
        });
    }

    getPersonnels(){
        this.personnelService.getAllPersonnels().subscribe((data) => {
            this.listPersonnel = data;
        });
    }

    showFormDialog(){
        this.formVisible = true;
    }

    showEditFormDialog(remuneration: Remuneration){
        this.formVisible = true;
        this.remunerationForm.patchValue(remuneration);
    }

    close(){
        this.formVisible = false;
    }

}
