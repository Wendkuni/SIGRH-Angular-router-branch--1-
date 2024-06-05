import {Cols} from "../primeng/primeng.model";

export let personnelColonneTable : Cols[] = [
    {field: 'photo', header: 'Photo'},
    {field: 'nni', header: 'NNI'},
    {field: 'matricule', header: 'Matricule'},
    {field: 'nometprenom', header: 'Nom et prénom'},
    {field: 'nometprenomarab', header: 'Nom et prénom Arab'},
    {field: 'tlphone', header: 'Téléphone'},
    {field: 'adrssemp', header: 'Adresse'},
    {field: 'dtenaiss', header: 'Date naissance'},
    {field: 'lieunaiss', header: 'Lieu naissance'},
    {field: 'dterecrutmnt', header: 'Date recrutement'},
    {field: 'dtetitularisation', header: 'Date titularisation'},
    {field: 'debucntrat', header: 'Début contrat'},
    {field: 'fincntrat', header: 'Fin contrat'},
    {field: 'bank', header: 'Banque'},
    {field: 'codbank', header: 'Code banque'},
    {field: 'numrocpte', header: 'Numéro compte'},
    {field: 'clerib', header: 'Clé rib'},
    {field: 'detacher', header: 'Détacher'},
    {field: 'ministereorigine', header: 'Ministère origine'},
    {field: 'Typeeducation', header: 'Type éducation'},
    {field: 'statusemp', header: 'Statut employé'},
    {field: 'actifornot', header: 'Situation'}
];

export interface PersonnelRequest {

    // Matricule du personnel (probablement une chaîne de caractères)
    matricule: string;

    // Numéro d'identification nationale (probablement une chaîne de caractères)
    nni: string;

    // Nom et prénom (probablement une chaîne de caractères)
    nometprenom: string;

    // Nom et prénom en caractères arabes (probablement une chaîne de caractères)
    nometprenomarab: string;

    // Statut actif ou inactif (probablement une chaîne de caractères)
    actifornot: string;

    // Date de recrutement (probablement un objet Date)
    dterecrutemnt: Date;

    // Date de titularisation (probablement un objet Date)
    dtetitularisation: Date;

    // Date de départ (probablement un objet Date, ou null si toujours employé)
    dtedepart: Date;

    // Statut d'emploi (probablement une chaîne de caractères)
    statusemp: string;

    // Numéro de téléphone (probablement une chaîne de caractères)
    tlphone: string;

    // Adresse du personnel (probablement une chaîne de caractères)
    adressemp: string;

    // Date de début du contrat (probablement un objet Date)
    debutcntrat: Date;

    // Date de fin du contrat (probablement un objet Date, ou null si indéterminé)
    fincntrat: Date;

    // Date de naissance (probablement un objet Date)
    dtenaiss: Date;

    // Lieu de naissance (probablement une chaîne de caractères)
    lieunaiss: string;

    // Nom de la banque (probablement une chaîne de caractères)
    bank: string;

    // Code banque (probablement une chaîne de caractères)
    codbank: string;

    // Numéro de compte (probablement une chaîne de caractères)
    numrocpte: string;

    // RIB (probablement une chaîne de caractères, si applicable)
    clerib: string;

    // Indique si détaché du ministère d'origine (probablement une chaîne de caractères)
    detacher: string;

    // Ministère d'origine (probablement une chaîne de caractères, si applicable)
    ministereorigine: string;

    // Type d'éducation (probablement une chaîne de caractères)
    Typeeducation: string;
}

export interface PersonnelResponse {
    // Identifiant unique du dossier personnel (probablement une chaîne de caractères)
    id: bigint;

    // Matricule du personnel (probablement une chaîne de caractères)
    matricule: string;

    // Photo du personnel (url de l'image)
    photo: string;

    // Numéro d'identification nationale (probablement une chaîne de caractères)
    nni: string;

    // Nom et prénom  (probablement une chaîne de caractères)
    nometprenom: string;

    // Nom et prénom en caractères arabes (probablement une chaîne de caractères)
    nometprenomarab: string;

    // Statut actif ou inactif (probablement une chaîne de caractères)
    actifornot: string;

    // Date de recrutement (probablement un objet Date)
    dterecrutemnt: Date;

    // Date de titularisation (probablement un objet Date)
    dtetitularisation: Date;

    // Date de départ (probablement un objet Date, ou null si toujours employé)
    dtedepart: Date;

    // Statut d'emploi (probablement une chaîne de caractères)
    statusemp: string;

    // Numéro de téléphone (probablement une chaîne de caractères)
    tlphone: string;

    // Adresse du personnel (probablement une chaîne de caractères)
    adressemp: string;

    // Date de début du contrat (probablement un objet Date)
    debutcntrat: Date;

    // Date de fin du contrat (probablement un objet Date, ou null si indéterminé)
    fincntrat: Date;

    // Date de naissance (probablement un objet Date)
    dtenaiss: Date;

    // Lieu de naissance (probablement une chaîne de caractères)
    lieunaiss: string;

    // Nom de la banque (probablement une chaîne de caractères)
    bank: string;

    // Code banque (probablement une chaîne de caractères)
    codbank: string;

    // Numéro de compte (probablement une chaîne de caractères)
    numrocpte: string;

    // RIB (probablement une chaîne de caractères, si applicable)
    clerib: string;

    // Indique si détaché du ministère d'origine (probablement une chaîne de caractères)
    detacher: string;

    // Ministère d'origine (probablement une chaîne de caractères, si applicable)
    ministereorigine: string;

    // Type d'éducation (probablement une chaîne de caractères)
    Typeeducation: string;
}

export interface Dossier {
    id: string; // Attribute name: id
    nom: string; // Attribute name: nom
    date: string; // Attribute name: date
    observation: string; // Attribute name: observation
    idPersonnel: string; // Attribute name: idPersonnel (foreign key)
    // images: string[]; Attribute name: images (array of strings)
}

// Personnel model on database
export interface Personnel{
    IDagent: bigint;
    matricul: string;
    dtetitularisation: Date;
    dtesortie: Date;
    statusemp: string;
    tlphone: string;
    adrssemp: string;
    debucntrat: Date;
    fincntrat: Date;
    nometprenom: string;
    datenaiss: string;
    actifornot: boolean;
    nni: string;
    bank: string;
    numrocpte: string;
    lieunaiss: string;
    Typeeducation: string;
    dterecrutmnt: Date;
    detacher: string;
    ministerorigne: string;
    clerib: string;
    codbank: string;
    nometprenomarab: string;
}
