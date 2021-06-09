import {Component,OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from '../../../classe/user.class'

@Component({
  selector: 'app-supprimer-support-user',
  templateUrl: './supprimer-support-user.component.html',
  styleUrls: ['./supprimer-support-user.component.css']
})
export class SupprimerSupportUserComponent implements OnInit {

  constructor( 
    public dialogRef: MatDialogRef<SupprimerSupportUserComponent>,
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
