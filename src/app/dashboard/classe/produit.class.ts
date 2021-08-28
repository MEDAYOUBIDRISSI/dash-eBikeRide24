import { Categorie } from "../classe/categorie.class";
import { Univer } from "../classe/univer.class";
import { Remise } from "../classe/remise.class";
//import { Tage } from "src/feature/tage/schemas/tage.schema";
import { Marque } from "../classe/marque.class";
export interface Produit{
    _id ?: number;
    codeBare?:string;
    libelle?:string;
    hideline?:string;
    description?:string;
    prixAchat?:number;
    prixVent?:number;
    qteStock?:number;
    anneModel?:string;
    etat?:boolean;
    typeProduct?:string;
    tailleRue?:string;
    nombreDengrenages?:string;
    materiau_du_cadre?:string;
    materiau_de_lafourche?:string;
    freins?:string;
    categorie?:Categorie;
    Tage?:string[];
    Remise?:Remise;
    Marque?:Marque;
    Univer?:Univer;
    Image?:string[];
}