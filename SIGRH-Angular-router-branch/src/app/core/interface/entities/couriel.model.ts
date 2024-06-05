export interface Couriel {


    /** ID */
    id: number;

    /** Libellé (Label) */
    libelle: string;

    /** Type */
    type: string;

    /** Source */
    source: string;

    /** SENS (Direction) */
    sens: string;

    /** Catégorie (Category) */
    categorie: string;

    /** Observation */
    observation?: string; // Optional field

    /** Désignation (Designation) */
    designation: string;

    /** Ventilation */
    ventilation?: string; // Optional field

    /** Date Ventilation */
    dateVentilation?: string; // Optional field

    /** Object */
    object?: string; // Optional field

    /** N/DOC (Document Number) */
    numDoc?: string; // Optional field

    /** Annotation */
    annotation?: string; // Optional field

    /** SE */
    se?: string; // Optional field

    /** Date Couriel (Email Date) */
    dateCouriel: string;
}
