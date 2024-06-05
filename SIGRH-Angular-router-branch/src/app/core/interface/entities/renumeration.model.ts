import {PersonnelResponse} from "./personnel.model";

/*
 * Interface pour l'entité renumeration
 */
  export interface Remuneration{
    
    IDRENUMERATIONAGENT: bigint;
    // Id de l'agent (foreign key)
    IDagent: bigint;
    // Valeur de la renumeration(Net à payer)
    valmnt: string;
    // Banque de l'agent(ou de la renumeration)
    banklib:string;
    // Mois de la renumeration
    dateeffet:Date;

    }


    export interface RemunerationWithAgent{
        IDRENUMERATIONAGENT: bigint;
        valmnt: string;
        banklib:string;
        dateeffet:Date;
        agent:PersonnelResponse;
    }

