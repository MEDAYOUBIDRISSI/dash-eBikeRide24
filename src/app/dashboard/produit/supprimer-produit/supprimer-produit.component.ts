import {Component,OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Produit } from '../../classe/produit.class'

@Component({
  selector: 'app-supprimer-produit',
  templateUrl: './supprimer-produit.component.html',
  styleUrls: ['./supprimer-produit.component.css']
})
export class SupprimerProduitComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SupprimerProduitComponent>,
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
