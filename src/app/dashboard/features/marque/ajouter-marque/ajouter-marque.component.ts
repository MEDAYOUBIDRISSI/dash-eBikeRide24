import { Component, OnInit } from '@angular/core';
import { Marque } from '../../../classe/marque.class'
import { MarqueServiceService } from '../marque-service.service'
import { Router } from '@angular/router';

@Component({  
  selector: 'app-ajouter-marque',
  templateUrl: './ajouter-marque.component.html',
  styleUrls: ['./ajouter-marque.component.css']
})
export class AjouterMarqueComponent implements OnInit {

  public Marque: Marque={libelle:'',description:''}
 
  constructor(private MarqueService: MarqueServiceService,
    private router: Router) { }
  
    ngOnInit(): void {
    }
  
    saveMarque(){
      this.MarqueService.createMarque(this.Marque).subscribe( data =>{
        console.log(data);
        this.goToMarqueList();
      },
      error => console.log(error));
    }
  
    goToMarqueList(){
      this.router.navigate(['dash/feature']);
    }
    
    onSubmit(){
      console.log(this.Marque);
      this.saveMarque();
    }

}
