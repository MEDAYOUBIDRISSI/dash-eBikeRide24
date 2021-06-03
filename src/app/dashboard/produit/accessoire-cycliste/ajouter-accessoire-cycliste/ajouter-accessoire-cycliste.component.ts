import { Component, OnInit } from '@angular/core';
import { Produit } from '../../../classe/produit.class'
import { Marque } from '../../../classe/marque.class'
import { Categorie } from '../../../classe/categorie.class'
import { Univer } from '../../../classe/univer.class'
import { AccessoireCyclisteServiceService } from '../accessoire-cycliste-service.service'
import { MarqueServiceService } from '../../../features/marque/marque-service.service'
import { CategorieServiceService } from '../../../features/categorie/categorie-service.service'
import { UniverServiceService } from '../../../features/univer/univer-service.service'
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-ajouter-accessoire-cycliste',
  templateUrl: './ajouter-accessoire-cycliste.component.html',
  styleUrls: ['./ajouter-accessoire-cycliste.component.css']
})
export class AjouterAccessoireCyclisteComponent implements OnInit {

  public Produit: Produit={codeBare:'',libelle:'',hideline:'',description:'',prixAchat:0,prixVent:0,qteStock:0,anneModel:'',etat:false,typeProduct:'AccessoireCycliste'};

  urls=[];

  imagesUpload:string[]=[]
  imagesInsert:string[]=[]

  marques: Marque[]=[];
  univers: Univer[]=[];
  categories: Categorie[]=[];

  constructor(private AccessoireCyclisteService: AccessoireCyclisteServiceService,private MarqueService: MarqueServiceService,private UniverService: UniverServiceService,private CategorieService: CategorieServiceService,
    private router: Router) { }
  
    ngOnInit(): void {
      this.getMarques()
      this.getUnivers()
      this.getCategories()
    }
  
    async saveProduit(){
      this.charge_Images()
      await this.createProduct()
      
    }
    charge_Images()
    {
      for(var i=0;i<this.urls.length;i++)
      {
        this.imagesUpload.push(this.urls[i])
      }
      // for(var i=0;i<this.imagesUpload.length;i++)
      // {
      //     this.BicyletteService.createImage(this.imagesUpload[i]).subscribe( data =>{
      //       console.log(data);
      //       this.imagesInsert.push(data.Image)
      //     },
      //     error => console.log(error));
      // }   
      this.Produit.Image=this.imagesUpload;
    }

    createProduct()
    {
      this.AccessoireCyclisteService.createAccessoireCycliste(this.Produit).subscribe( data =>{
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
      this.router.navigate(['dash/produits']);
    }
    
    onSubmit(){
      console.log(this.Produit);
      this.saveProduit();
    }

    selectFiles(e)
    {
      this.urls=[]
      if(e.target.files)
      {
        for(var i=0;i<File.length;i++)
        {
          var reader=new FileReader()
          reader.readAsDataURL(e.target.files[i])
          reader.onload=(events:any)=>{
            this.urls.push(events.target.result)
          }
        }
      }
      console.log(this.urls)
    }

    delete_img(url:any)
    {
        const index: number = this.urls.indexOf(url);
        this.urls.splice(index, 1);
    }

}
