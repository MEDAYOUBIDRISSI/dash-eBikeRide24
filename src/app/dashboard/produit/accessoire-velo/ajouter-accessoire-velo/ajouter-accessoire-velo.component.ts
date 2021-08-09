import { Component, OnInit } from '@angular/core';
import { Produit } from '../../../classe/produit.class'
import { Marque } from '../../../classe/marque.class'
import { Categorie } from '../../../classe/categorie.class'
import { Univer } from '../../../classe/univer.class'
import { AccessoireVeloServiceService } from '../accessoire-velo-service.service'
import { MarqueServiceService } from '../../../features/marque/marque-service.service'
import { CategorieServiceService } from '../../../features/categorie/categorie-service.service'
import { UniverServiceService } from '../../../features/univer/univer-service.service'
import { Router } from '@angular/router';
import { Image } from 'src/app/dashboard/classe/image.class';

@Component({
  selector: 'app-ajouter-accessoire-velo',
  templateUrl: './ajouter-accessoire-velo.component.html',
  styleUrls: ['./ajouter-accessoire-velo.component.css']
})
export class AjouterAccessoireVeloComponent implements OnInit {

  public Produit: Produit={codeBare:'',libelle:'',hideline:'',description:'',prixAchat:0,prixVent:0,qteStock:0,anneModel:'',etat:false,typeProduct:'AccessoireVelo'};

  urls:any[]=[];

  imagesUpload:string[]=[]
  imagesInsert:string[]=[]

  marques: Marque[]=[]; 
  univers: Univer[]=[];
  categories: Categorie[]=[]; 

  constructor(private AccessoireVeloService: AccessoireVeloServiceService,private MarqueService: MarqueServiceService,private UniverService: UniverServiceService,private CategorieService: CategorieServiceService,
    private router: Router) { }
  
    ngOnInit(): void {
      this.getMarques()
      this.getUnivers()
      this.getCategories()
    }
  
    async saveProduit(){
      //this.charge_Images()
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
      this.AccessoireVeloService.createAccessoireVelo(this.Produit).subscribe( data =>{
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

    selectFiles(e:any)
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

    AddselectFiles(e:any)
    {
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
    files: File[] = [];

    onSelect(event:any) {
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
      // reader.onload = function () {
      //   a=(reader.result.toString().split("base64,", 3))[1];      
      //   b.push(a);
        
      // }
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
}
