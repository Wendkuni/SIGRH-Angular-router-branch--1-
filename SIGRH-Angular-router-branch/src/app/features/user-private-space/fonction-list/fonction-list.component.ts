import {Component, inject, OnInit} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {SharedModule} from "primeng/api";
import {Table, TableModule} from "primeng/table";
import {ToolbarModule} from "primeng/toolbar";
import {TooltipModule} from "primeng/tooltip";
import {Cols} from "../../../core/interface/primeng/primeng.model";
import {Observable} from "rxjs";
import {Fonction} from "../../../core/interface/entities/fonction.model";
import {FonctionAgentService} from "../../../core/service/fonction-agent/fonction-agent.service";

@Component({
  selector: 'app-fonction-list',
  standalone: true,
    imports: [
        AsyncPipe,
        ButtonModule,
        CardModule,
        DialogModule,
        DropdownModule,
        InputNumberModule,
        InputTextModule,
        RippleModule,
        SharedModule,
        TableModule,
        ToolbarModule,
        TooltipModule
    ],
  templateUrl: './fonction-list.component.html',
  styleUrl: './fonction-list.component.scss'
})
export class FonctionListComponent  implements OnInit{
    cols: Cols[] = [
        {field: 'fonction', header: 'Fonction'},
        {field: 'fonctionenarabe', header: 'Fonction en arabe'},
        {field: 'corps', header: 'Corps'},
        {field: 'grade', header: 'Grade'},
        {field: 'categorie', header: 'Catégorie'},
        {field: 'echelon', header: 'Echelon'},
        {field: 'echelle', header: 'Echelle'},
        {field: 'indice', header: 'Indice'},
        {field: 'salairedebase', header: 'Salaire de base'}
    ];

    fonctionAgentVisible = false;
    listFonctionAgent$!: Observable<Fonction[]>;
    fonctionService = inject(FonctionAgentService);

    ngOnInit(): void {
        this.getAllFonctionAgent();
    }

    // Methode pour filtrer les elements du tableau
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    async getAllFonctionAgent() {
        this.listFonctionAgent$ = await this.fonctionService.getAllFonctions();
    }

    showDialog() {
        this.fonctionAgentVisible = true;
    }
}
