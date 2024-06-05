export interface Fonction {
    // Identifiant unique de la fonction
    id: number;
    // Fonction de l'agent
  fonction: string;
    // Fonction de l'agent en arabe
  fonctionenarabe: string;
    // Corps de l'agent
  corps: string;
    // Grade de l'agent
  grade: string;
    // Catégorie de l'agent
  categorie: string;
    // Echelon de l'agent
  echelon: string;
    // Indice de l'agent
  echelle: string;
    // Salaire de base de l'agent
  indice: string;
    // Salaire de base de l'agent
  salairedebase: string;
}

export interface Avancement{
    nature:string,
    corps: string;
    fonction: string,
    grade: string,
    echelle: string,
    echellon: string,
    dateEffet: Date
    idPersonnel: string
}

// Interface fonction agent on database
export interface Fonctionagent{
    IDFONCTIONAGENT: bigint;
    IDagent:bigint;
    fonctionlib: string;
    datefonction: Date;
    ECHELLE: string;
    echelon: string;
    GroupeA: string;
    CAtegoriA: string;
    CorpsA: string;
    GRADE:string;
    INDIXE:string;
    CORPSAarab: string;
    fonctionliarab:string;
}

//  Interface fonction list
export interface fonctionliste{
    IDFONCTIONLISTE: bigint;
    libfonctn:string;
    libfonctnarab:string;
    GRADE: string;
    ECHELLE: string;
    salbase: GLfloat;
    INDIXE: string;
    echelon :string;
}
