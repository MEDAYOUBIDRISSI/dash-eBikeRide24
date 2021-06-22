import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from '../../../classe/user.class' 
@Component({
  selector: 'app-client-status',
  templateUrl: './client-status.component.html',
  styleUrls: ['./client-status.component.css']
})
export class ClientStatusComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ClientStatusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
 
  onNoClick(): void {
    this.dialogRef.close();
  }
  onClickChangeStatus():void{
    this.dialogRef.close("change")
  }

  ngOnInit(): void {
  }

}
