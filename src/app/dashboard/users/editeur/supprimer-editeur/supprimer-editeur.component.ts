import {Component,OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from '../../../classe/user.class'

@Component({
  selector: 'app-supprimer-editeur',
  templateUrl: './supprimer-editeur.component.html',
  styleUrls: ['./supprimer-editeur.component.css']
})
export class SupprimerEditeurComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SupprimerEditeurComponent>,
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
