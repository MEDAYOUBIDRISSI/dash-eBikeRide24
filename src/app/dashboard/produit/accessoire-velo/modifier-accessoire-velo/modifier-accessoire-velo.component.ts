import { Component, OnInit } from '@angular/core';
import { Produit } from '../../../classe/produit.class'
import { AccessoireVeloServiceService } from '../accessoire-velo-service.service'
import { ActivatedRoute,Router } from '@angular/router';
import { Marque } from '../../../classe/marque.class'
import { Categorie } from '../../../classe/categorie.class'
import { Univer } from '../../../classe/univer.class'
import { Image } from "../../../classe/image.class";
import { MarqueServiceService } from '../../../features/marque/marque-service.service'
import { CategorieServiceService } from '../../../features/categorie/categorie-service.service'
import { UniverServiceService } from '../../../features/univer/univer-service.service'
import {MatSnackBar} from '@angular/material/snack-bar';
import { RemiseServiceService } from '../../../features/remise/remise-service.service'
import { Remise } from '../../../classe/remise.class'

@Component({
  selector: 'app-modifier-accessoire-velo',
  templateUrl: './modifier-accessoire-velo.component.html',
  styleUrls: ['./modifier-accessoire-velo.component.css']
})
export class ModifierAccessoireVeloComponent implements OnInit {

  _id: number=-1;
  public Produit: Produit={codeBare:'',libelle:'',hideline:'',description:'',prixAchat:0,prixVent:0,qteStock:0,anneModel:'',etat:false,typeProduct:'AccessoireVelo'};
  urls:any[]=[];

  imagesUpload:string[]=[]
  imagesInsert:string[]=[]

  marques: Marque[]=[];
  univers: Univer[]=[];
  categories: Categorie[]=[];
  remises:Remise[]=[]
  tage:string=""
  tages:string[]=[]
 
  constructor(private AccessoireVeloService: AccessoireVeloServiceService,
    private MarqueService: MarqueServiceService,private UniverService: UniverServiceService,private CategorieService: CategorieServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private RemiseService: RemiseServiceService) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['_id'];
    this.getMarques()
    this.getUnivers()
    this.getCategories()
    this.getRemises()

    this.AccessoireVeloService.getAccessoireVeloById(this._id).subscribe(data => {
      this.Produit = data.product;
      this.tages=this.Produit.Tage
      this.urls=this.Produit.Image
      console.log(this.Produit)
    }, error => console.log(error));
  } 

  addTage()
    {
      var index = this.tages.indexOf(this.tage);
      if (index == -1) {
        this.tages.push(this.tage)
      }
      this.tage=""
    }
    removeTege(tage:any)
    {
      var index = this.tages.indexOf(tage);
      if (index !== -1) {
        this.tages.splice(index, 1);
      }
    }

  getMarques()
  {
    this.MarqueService.getMarquesList().subscribe(data => {
      this.marques = data.Marque;
      console.log(this.marques)
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
  getRemises()
    {
      this.RemiseService.getRemisesList().subscribe(data => {
        this.remises = data.Remises;
      }, error => console.log(error));
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
  displyRemise(event:any){
    this.Produit.Remise=event
  }

  onSubmit(){
    if(this.Produit.libelle =="" || this.Produit.description == ""
    || this.Produit.hideline == "" || this.Produit.codeBare == "" 
    || this.Produit.prixVent <= 0 || this.Produit.prixAchat <=0 
    || this.Produit.qteStock <= 0 || this.Produit.anneModel == ""
    || this.Produit.Marque == null || this.Produit.categorie == null)
    {
      console.log(this.Produit)
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
        this.charge_Images()
        this.AccessoireVeloService.updateAccessoireVelo(this._id, this.Produit).subscribe( data =>{
          this.goToProduitList();
        }, error => console.log(error)); 
      } 
    }
  }

  goToProduitList(){
    this.ShowNotification('Product Updated well','Close','4000',"custom-success-style")
    this.router.navigate(['dash/produits/accessoirevelo']);
  }

  charge_Images()
    {
      for(var i=0;i<this.urls.length;i++)
      {
        this.Produit.Image.push(this.urls[i])
      }
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
