// export interface User {
//     id: number;
//     email: string;
//     password: string;
//     role: string;
// }

export interface Utilisateur {
    // Identifiant unique de l'utilisateur
    id: number;

    // Nom de l'utilisateur
    name: string;

    // Adresse e-mail de l'utilisateur
    email: string;

    // Mot de passe de l'utilisateur
    password: string;

    // Rôle de l'utilisateur
    role: string;
}


// Interface utilisateur on data base
export interface UTILISATEUR{
    IDUTILISATEUR: bigint;
    loginA: string;
    nometprenom: string;
    droitA:string;
    passwd: string;
}


// Interface roles on database
export interface roles{
    IDROLESA: bigint;
    rolea: string;
    IDUTILISATEUR: bigint;
}
