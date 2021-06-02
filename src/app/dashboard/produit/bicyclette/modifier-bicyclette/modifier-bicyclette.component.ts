import { Component, OnInit } from '@angular/core';
import { Produit } from '../../../classe/produit.class'
import { BicyletteServiceService } from '../bicylette-service.service'
import { ActivatedRoute,Router } from '@angular/router';
import { Marque } from '../../../classe/marque.class'
import { Categorie } from '../../../classe/categorie.class'
import { Univer } from '../../../classe/univer.class'
import { Image } from "../../../classe/image.class";
import { MarqueServiceService } from '../../../features/marque/marque-service.service'
import { CategorieServiceService } from '../../../features/categorie/categorie-service.service'
import { UniverServiceService } from '../../../features/univer/univer-service.service'

@Component({
  selector: 'app-modifier-bicyclette',
  templateUrl: './modifier-bicyclette.component.html',
  styleUrls: ['./modifier-bicyclette.component.css']
})
export class ModifierBicycletteComponent implements OnInit {

  _id: number=-1;
  public Produit: Produit={codeBare:'',libelle:'',hideline:'',description:'',prixAchat:0,prixVent:0,qteStock:0,anneModel:'',etat:false,typeProduct:'Bicyclette',tailleRue:'',nombreDengrenages:'',materiau_du_cadre:'',materiau_de_lafourche:'',freins:''};
  urls:string[]=[];

  imagesUpload:string[]=[]
  imagesInsert:string[]=[]

  marques: Marque[]=[];
  univers: Univer[]=[];
  categories: Categorie[]=[];
 
  constructor(private BicyletteService: BicyletteServiceService,
    private MarqueService: MarqueServiceService,private UniverService: UniverServiceService,private CategorieService: CategorieServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['_id'];
    this.getMarques()
    this.getUnivers()
    this.getCategories()

    this.BicyletteService.getBicycletteById(this._id).subscribe(data => {
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
    this.BicyletteService.updateBicyclette(this._id, this.Produit).subscribe( data =>{
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
        this.imagesUpload.push(this.urls[i])
      }
      this.Produit.Image=this.imagesUpload;
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

}
