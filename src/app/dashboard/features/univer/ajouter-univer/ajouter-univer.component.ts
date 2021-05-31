import { Component, OnInit } from '@angular/core';
import { Univer } from '../../../classe/univer.class'
import { UniverServiceService } from '../univer-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-univer',
  templateUrl: './ajouter-univer.component.html',
  styleUrls: ['./ajouter-univer.component.css']
})
export class AjouterUniverComponent implements OnInit {

  public Univer: Univer={libelle:'',description:''}
 
  constructor(private UniverService: UniverServiceService,
    private router: Router) { }
  
    ngOnInit(): void {
    }
  
    saveUniver(){
      this.UniverService.createUniver(this.Univer).subscribe( data =>{
        console.log(data);
        this.goToUniverList();
      },
      error => console.log(error));
    }
  
    goToUniverList(){
      this.router.navigate(['dash/feature']);
    }
    
    onSubmit(){
      console.log(this.Univer);
      this.saveUniver();
    }

}
