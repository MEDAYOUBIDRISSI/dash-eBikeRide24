import { Component, OnInit } from '@angular/core';
import { Produit } from '../../../classe/produit.class'
import { AccessoireCyclisteServiceService } from '../accessoire-cycliste-service.service'
import { ActivatedRoute,Router } from '@angular/router';
import { Marque } from '../../../classe/marque.class'
import { Categorie } from '../../../classe/categorie.class'
import { Univer } from '../../../classe/univer.class'
import { Image } from "../../../classe/image.class";
import { MarqueServiceService } from '../../../features/marque/marque-service.service'
import { CategorieServiceService } from '../../../features/categorie/categorie-service.service'
import { UniverServiceService } from '../../../features/univer/univer-service.service'

@Component({
  selector: 'app-modifier-accessoire-cycliste',
  templateUrl: './modifier-accessoire-cycliste.component.html',
  styleUrls: ['./modifier-accessoire-cycliste.component.css']
})
export class ModifierAccessoireCyclisteComponent implements OnInit {

  _id: number=-1;
  public Produit: Produit={codeBare:'',libelle:'',hideline:'',description:'',etat:true,typeProduct:'AccessoireCycliste'};
  urls:string[]=[];

  imagesUpload:string[]=[]
  imagesInsert:string[]=[]

  marques: Marque[]=[];
  univers: Univer[]=[];
  categories: Categorie[]=[];
 
  constructor(private AccessoireCyclisteService: AccessoireCyclisteServiceService,
    private MarqueService: MarqueServiceService,private UniverService: UniverServiceService,private CategorieService: CategorieServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['_id'];
    this.getMarques()
    this.getUnivers()
    this.getCategories()

    this.AccessoireCyclisteService.getAccessoireCyclisteById(this._id).subscribe(data => {
      this.Produit = data.product;
      this.urls=this.Produit.Image
    }, error => console.log(error));
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
  displyMarque(event:any){
    this.Produit.Marque=event
  }
  displyUniver(event:any){
    this.Produit.Univer=event
  }
  displyCategorie(event:any){
    this.Produit.categorie=event
  }

  onSubmit(){
    this.charge_Images()
    this.AccessoireCyclisteService.updateAccessoireCycliste(this._id, this.Produit).subscribe( data =>{
      this.goToProduitList();
    }, error => console.log(error));
  }

  goToProduitList(){
    this.router.navigate(['dash/produits']);
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

}
