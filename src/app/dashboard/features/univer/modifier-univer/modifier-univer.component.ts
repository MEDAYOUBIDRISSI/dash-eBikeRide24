import { Component, OnInit } from '@angular/core';
import { Univer } from '../../../classe/univer.class'
import { UniverServiceService } from '../univer-service.service'
import { ActivatedRoute,Router } from '@angular/router';

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
    private router: Router) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['_id'];

    this.UniverService.getUniverById(this._id).subscribe(data => {
      this.Univer = data.univer;
    }, error => console.log(error));
  } 
 
  onSubmit(){
    this.UniverService.updateUniver(this._id, this.Univer).subscribe( data =>{
      this.goToUniverList();
    }, error => console.log(error));
  }

  goToUniverList(){
    this.router.navigate(['dash/feature']);
  }

}
