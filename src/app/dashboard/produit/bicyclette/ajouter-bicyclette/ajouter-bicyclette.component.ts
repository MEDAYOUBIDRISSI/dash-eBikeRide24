import { Component, OnInit } from '@angular/core';
import { Produit } from '../../../classe/produit.class'
import { Marque } from '../../../classe/marque.class'
import { Categorie } from '../../../classe/categorie.class'
import { Univer } from '../../../classe/univer.class'
import { Image } from "../../../classe/image.class";
import { BicyletteServiceService } from '../bicylette-service.service'
import { MarqueServiceService } from '../../../features/marque/marque-service.service'
import { CategorieServiceService } from '../../../features/categorie/categorie-service.service'
import { UniverServiceService } from '../../../features/univer/univer-service.service'
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-ajouter-bicyclette',
  templateUrl: './ajouter-bicyclette.component.html',
  styleUrls: ['./ajouter-bicyclette.component.css']
})
export class AjouterBicycletteComponent implements OnInit { 

  public Produit: Produit={codeBare:'',libelle:'',hideline:'',description:'',etat:true,typeProduct:'Bicyclette',tailleRue:'',nombreDengrenages:'',materiau_du_cadre:'',materiau_de_lafourche:'',freins:''};
  urls=[];

  marques: Marque[]=[];
  univers: Univer[]=[];
  categories: Categorie[]=[];

  constructor(private BicyletteService: BicyletteServiceService,private MarqueService: MarqueServiceService,private UniverService: UniverServiceService,private CategorieService: CategorieServiceService,
    private router: Router,
    private snackBar: MatSnackBar) { }
  
    ngOnInit(): void {
      this.getMarques()
      this.getUnivers()
      this.getCategories()
    }
  
    saveProduit(){
      if(this.Produit.libelle =="" || this.Produit.description == ""
      || this.Produit.hideline == "" || this.Produit.codeBare == "" 
      || this.Produit.prixVent <= 0 || this.Produit.prixAchat <=0 
      || this.Produit.qteStock <= 0 || this.Produit.anneModel == ""
      || this.Produit.materiau_de_lafourche == "" || this.Produit.materiau_du_cadre == "" 
      || this.Produit.tailleRue == "" || this.Produit.nombreDengrenages == "" 
      || this.Produit.freins == "" || this.Produit.Marque == null || this.Produit.Univer == null || this.Produit.categorie == null )
      {
        this.ShowNotification('Please enter all information ','Close','4000',"custom-error-style")
      }
      else
      {
        if(this.Produit.prixVent <= this.Produit.prixAchat)
        {
          this.ShowNotification('The selling price must be greater than the purchase price','Close','4000',"custom-error-style")
        }
        else
        {
          this.createProduct() 
        } 
      }
      
    }

    createProduct()
    {
      this.BicyletteService.createBicyclette(this.Produit).subscribe( data =>{
        console.log(data);
        this.goToProduitList();
      },
      error => console.log(error));
    }

    getMarques()
    {
      this.MarqueService.getMarquesList().subscribe(data => {
        this.marques = data.Marque;
      }, error => console.log(error));
    }

    getUnivers()
    {
      this.UniverService.getUniversList().subscribe(data => {
        this.univers = data.univers;
      }, error => console.log(error));
    }

    getCategories(){
      this.CategorieService.getCategoriesList().subscribe(data => {
        this.categories = data.categories;
      }); 
    }
    displyMarque(event:any){
      this.Produit.Marque=event
    }
    displyUniver(event:any){
      this.Produit.Univer=event
    }
    displyCategorie(event:any){
      this.Produit.categorie=event
    }
  
    goToProduitList(){
      this.ShowNotification('Product Add well','Close','4000',"custom-success-style")
      this.router.navigate(['dash/produits/bicyclette']);
    }
    
    onSubmit(){
      console.log(this.Produit);
      this.saveProduit();
    }


  files: File[] = [];

	onSelect(event:any) {
		console.log(event);
		this.files.push(...event.addedFiles);
    
    const formData = new FormData();  
      var a:any;  
      let b:any[]=[];
      if(b.length!=0){
        b=[];
      }
      for (var i = 0; i < this.files.length; i++) {   
      formData.append("file[]", this.files[i]);  
      let reader = new FileReader();
      reader.readAsDataURL(this.files[i]);
      reader.onload=(events:any)=>{
        b.push(events.target.result)
      }

      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }
      this.Produit.Image=b
      console.log(this.Produit.Image);
	}

	onRemove(event:any) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
    
    const formData = new FormData();  
      var a:any;  
      let b:any[]=[];
      if(b.length!=0){
        b=[];
      }
    for (var i = 0; i < this.files.length; i++) {   
      formData.append("file[]", this.files[i]);  
      let reader = new FileReader();
      reader.readAsDataURL(this.files[i]);
      reader.onload = function () {
        a=(reader.result.toString().split("base64,", 3))[1];      
        b.push(a);
        
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }
      console.log(this.Produit.Image);
      this.Produit.Image=b
	}
    

  ShowNotification(content:any, action:any, duration:any,type:any)
    {
      let sb = this.snackBar.open(content, action, {
        duration: duration,
        panelClass: [type]
      });
      sb.onAction().subscribe(() => {
        sb.dismiss();
      });
    }
}
