import {Component,OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from '../../../classe/user.class'

@Component({
  selector: 'app-supprimer-livreur',
  templateUrl: './supprimer-livreur.component.html',
  styleUrls: ['./supprimer-livreur.component.css']
})
export class SupprimerLivreurComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SupprimerLivreurComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onClickDelete():void{
    this.dialogRef.close("delete")
  }

  ngOnInit(): void {
  }

}
