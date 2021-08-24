import { Component, OnInit } from '@angular/core';
import { Marque } from '../../../classe/marque.class'
import { MarqueServiceService } from '../marque-service.service'
import { ActivatedRoute,Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-modifier-marque',
  templateUrl: './modifier-marque.component.html',
  styleUrls: ['./modifier-marque.component.css']
})
export class ModifierMarqueComponent implements OnInit {

  _id: number=-1;
  public Marque: Marque={_id: -1, libelle:'',description:''}
  constructor(private MarqueService: MarqueServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['_id'];

    this.MarqueService.getMarqueById(this._id).subscribe(data => {
      this.Marque = data.Marque;
    }, error => console.log(error)); 
  } 
 
  onSubmit(){
    if(this.Marque.libelle =="" || this.Marque.description == "")
      {
        this.ShowNotification('Please enter all information ','Close','4000',"custom-error-style")
      }
      else
      {
        this.MarqueService.updateMarque(this._id, this.Marque).subscribe( data =>{
          this.goToMarqueList();
        }, error => console.log(error));
      }
  }

  goToMarqueList(){
    this.ShowNotification('Btand Update well','Close','4000',"custom-success-style")
    this.router.navigate(['dash/feature/brand']);
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
