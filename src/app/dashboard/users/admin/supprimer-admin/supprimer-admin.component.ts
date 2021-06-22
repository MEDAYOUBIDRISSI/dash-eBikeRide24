import {Component,OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from '../../../classe/user.class' 

@Component({
  selector: 'app-supprimer-admin',
  templateUrl: './supprimer-admin.component.html',
  styleUrls: ['./supprimer-admin.component.css']
})
export class SupprimerAdminComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SupprimerAdminComponent>,
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
