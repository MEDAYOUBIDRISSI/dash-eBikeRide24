export interface Remise{
    _id ?: string;
    libelle?:string;
    pourcentage?:number;
    dateDebut?:Date;
    dateFine?:Date;
    etat?:string
}