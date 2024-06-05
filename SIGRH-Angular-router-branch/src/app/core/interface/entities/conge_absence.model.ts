export interface Raison {
  nom: string;
}

export interface CongeAbsenceResponse {
  IDABSENCEA: number;
  libelleab: string;
  dateeffet: Date;
  duree: number;
  raison: Raison;
  signataire: string;
  autorisation: string;
}

export interface DemandeConge {
    // Identifiant unique de la demande de congé
    id: number;
    // Matricule de l'agent
  matricule: string;
  // Nom et prénom de l'agent
  nometprenom: string;
    // Date de la demande
  dateEffet: Date;
  // Intervalle de congé
  intervalleConge: string;
    // Autorisation de la demande
  autorisation: DemandeAutorisation;
    // Raison de la demande
  raison: DemandeRaison;
    // Motif de la demande
  motif?: string;
  // Signataire de la demande
  signataire: string;
}

enum DemandeAutorisation {
  EnCours = "Demande en cours",
  Rejetee = "Demande rejetée",
  Refusee = "Demande refusée"
}

enum DemandeRaison {
  Absence = "Absence",
  Conge = "Congé",
  CongeViduite = "Congé Viduité",
  CongeMaladie = "Congé de maladie",
  CongeMaternite = "Congé de maternité",
  CongePelerinage = "Congé de pelerinage",
  Disponibilite = "Disponibilité",
  Detachement = "Détachement"
}
