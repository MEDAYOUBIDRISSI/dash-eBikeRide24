import { Component, OnInit } from '@angular/core';
import { Univer } from '../../../classe/univer.class'
import { UniverServiceService } from '../univer-service.service'
import { ActivatedRoute,Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-modifier-univer',
  templateUrl: './modifier-univer.component.html',
  styleUrls: ['./modifier-univer.component.css']
})
export class ModifierUniverComponent implements OnInit {

  
  _id: number=-1;
  public Univer: Univer={_id: -1, libelle:'',description:''}
  constructor(private UniverService: UniverServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['_id'];

    this.UniverService.getUniverById(this._id).subscribe(data => {
      this.Univer = data.univer;
    }, error => console.log(error));
  } 
 
  onSubmit(){
    if(this.Univer.libelle =="" || this.Univer.description == "")
      {
        this.ShowNotification('Please enter all information ','Close','4000',"custom-error-style")
      }
      else
      {
        this.UniverService.updateUniver(this._id, this.Univer).subscribe( data =>{
          this.goToUniverList();
        }, error => console.log(error));
      }
  }

  goToUniverList(){
    this.ShowNotification('Univer Update well','Close','4000',"custom-success-style")
    this.router.navigate(['dash/feature/univer']);
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
