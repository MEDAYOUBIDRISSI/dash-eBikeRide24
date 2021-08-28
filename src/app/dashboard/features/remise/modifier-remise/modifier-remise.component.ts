import { Component, OnInit } from '@angular/core';
import { Remise } from '../../../classe/remise.class'
import { RemiseServiceService } from '../remise-service.service'
import { ActivatedRoute,Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-modifier-remise',
  templateUrl: './modifier-remise.component.html',
  styleUrls: ['./modifier-remise.component.css']
})
export class ModifierRemiseComponent implements OnInit {

  _id: number=-1;
  public Remise: Remise={}

  constructor(private RemiseService: RemiseServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,public datepipe: DatePipe) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['_id'];

    this.RemiseService.getRemiseById(this._id).subscribe(data => {
        this.Remise = data.Remise;
        this.Remise.dateDebut=this.datepipe.transform(this.Remise.dateDebut, 'yyyy-MM-dd');
        this.Remise.dateFine=this.datepipe.transform(this.Remise.dateFine, 'yyyy-MM-dd');
    }, error => console.log(error)); 
  } 
 
  onSubmit(){
    if(this.Remise.libelle =="" || this.Remise.pourcentage == null || this.Remise.dateDebut ==null || this.Remise.dateFine == null)
      {
        this.ShowNotification('Please enter all information ','Close','4000',"custom-error-style")
      }
      else
      {
        this.RemiseService.updateRemise(this._id, this.Remise).subscribe( data =>{
          this.goToRemiseList();
        }, error => console.log(error));
      }
  }

  goToRemiseList(){
    this.ShowNotification('Remise Update well','Close','4000',"custom-success-style")
    this.router.navigate(['dash/feature/remise']);
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
